/**
 * Re-crop ALL Green Dream Challenge judge headshots so faces sit slightly
 * above vertical center with forehead/hair headroom, output 800×1000 (4:5).
 * Writes cache-busted *-v3.jpg files.
 *
 * Run: node scripts/reprocess-judge-headshots.mjs
 */
import sharp from "sharp";
import { mkdir, copyFile, access } from "fs/promises";
import { constants } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const BACKUP = path.join(JUDGES, "_pre-recenter-backup");
const PREVIEW = path.join(JUDGES, "_preview");

const W = 800;
const H = 1000;
const ASPECT = W / H;

const DALIANA_SRC = path.join(
  ASSETS,
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-7e116dd6-3300-43c1-b08a-e18b89fb06d9.png",
);

const ELLEN_SRC = path.join(
  ASSETS,
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Untitled_design__2_-d46aed82-81fe-44f8-a4ff-1282d4825390.png",
);

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function finishJpeg(pipeline, out) {
  await pipeline
    .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);
}

/**
 * Fractional crop snapped to 4:5 around the box center.
 * Prefer generous top so forehead/hair have headroom.
 */
async function fracCrop(input, out, { left, top, width, height, biasX = 0.5 }) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? 0;
  const srcH = meta.height ?? 0;

  let l = Math.round(srcW * left);
  let t = Math.round(srcH * top);
  let w = Math.round(srcW * width);
  let h = Math.round(srcH * height);

  const cx = l + w * biasX;
  const cy = t + h / 2;
  if (w / h > ASPECT) w = Math.round(h * ASPECT);
  else h = Math.round(w / ASPECT);

  l = Math.round(cx - w / 2);
  t = Math.round(cy - h / 2);
  l = Math.max(0, Math.min(l, srcW - w));
  t = Math.max(0, Math.min(t, srcH - h));
  w = Math.min(w, srcW - l);
  h = Math.min(h, srcH - t);
  if (Math.abs(w / h - ASPECT) > 0.01) {
    if (w / h > ASPECT) w = Math.round(h * ASPECT);
    else h = Math.round(w / ASPECT);
    l = Math.max(0, Math.min(l, srcW - w));
    t = Math.max(0, Math.min(t, srcH - h));
  }

  await finishJpeg(
    sharp(input)
      .rotate()
      .extract({ left: l, top: t, width: w, height: h })
      .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 }),
    out,
  );
  return { l, t, w, h, srcW, srcH };
}

/**
 * Cover-crop to 4:5 with north-biased attention.
 * positionBiasY: 0 = pin to top (max headroom), 0.5 = center.
 * Lower values = more forehead visible. Keep zoom mild.
 * biasX: 0 = left, 0.5 = center, 1 = right (for off-center faces).
 */
async function smartPortrait(
  input,
  out,
  { positionBiasY = 0.22, zoom = 1.0, biasX = 0.5 } = {},
) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? W;
  const srcH = meta.height ?? H;

  // Build a 4:5 extract window, then resize.
  let cropW;
  let cropH;
  if (srcW / srcH > ASPECT) {
    // Source wider than 4:5 — height-limited
    cropH = Math.round(srcH / Math.max(zoom, 1));
    cropW = Math.round(cropH * ASPECT);
  } else {
    // Source taller/narrower — width-limited
    cropW = Math.round(srcW / Math.max(zoom, 1));
    cropH = Math.round(cropW / ASPECT);
  }
  cropW = Math.min(cropW, srcW);
  cropH = Math.min(cropH, srcH);

  const maxLeft = Math.max(0, srcW - cropW);
  const maxTop = Math.max(0, srcH - cropH);
  const left = Math.round(maxLeft * biasX);
  const top = Math.round(maxTop * positionBiasY);

  await finishJpeg(
    sharp(input)
      .rotate()
      .extract({
        left: Math.max(0, Math.min(left, maxLeft)),
        top: Math.max(0, Math.min(top, maxTop)),
        width: cropW,
        height: cropH,
      })
      .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 }),
    out,
  );
  return {
    strategy: `biasY=${positionBiasY},biasX=${biasX},zoom=${zoom}`,
    srcW,
    srcH,
    cropW,
    cropH,
    left,
    top,
  };
}

async function resolveSource(candidates) {
  for (const c of candidates) {
    if (await exists(c)) return c;
  }
  return null;
}

const JOBS = [
  {
    name: "daliana-vargas-v3.jpg",
    async run() {
      const src = await resolveSource([
        DALIANA_SRC,
        path.join(BACKUP, "daliana-vargas.jpg"),
        path.join(JUDGES, "daliana-vargas.jpg"),
      ]);
      if (!src) throw new Error("Daliana source missing");
      const out = path.join(JUDGES, "daliana-vargas-v3.jpg");
      // Atrium shot: keep glass above but include full hair + forehead
      const info = await fracCrop(src, out, {
        left: 0.05,
        top: 0.18,
        width: 0.9,
        height: 0.78,
        biasX: 0.52,
      });
      return { out, info: { ...info, src } };
    },
  },
  {
    name: "ellen-finegan-v3.jpg",
    async run() {
      const src = await resolveSource([
        ELLEN_SRC,
        path.join(BACKUP, "ellen-finegan.jpg"),
        path.join(JUDGES, "ellen-finegan-v2.jpg"),
        path.join(JUDGES, "ellen-finegan-v3.jpg"),
      ]);
      if (!src) throw new Error("Ellen source missing");
      const out = path.join(JUDGES, "ellen-finegan-v3.jpg");
      const info = await fracCrop(src, out, {
        left: 0.1,
        top: 0.04,
        width: 0.8,
        height: 0.9,
      });
      return { out, info: { ...info, src } };
    },
  },
  // [outName, sourceCandidates, biasY, zoom, biasX]
  // biasY low → more headroom; mild zoom only
  ...[
    [
      "payton-schield-v3.jpg",
      ["payton-schield-v2.jpg", "payton-schield.jpg"],
      0.18,
      1.05,
      0.58, // face was left-biased in frame → shift crop right
    ],
    ["ryan-havlick-v3.jpg", ["ryan-havlick.jpg"], 0.12, 1.0, 0.5],
    ["roselynne-orrala-v3.jpg", ["roselynne-orrala.jpg"], 0.1, 1.02, 0.5],
    ["owen-christy-v3.jpg", ["owen-christy.jpg"], 0.05, 1.1, 0.62],
    ["jack-ma-v3.jpg", ["jack-ma.jpg"], 0.05, 1.0, 0.5],
    ["idhant-ranjan-v3.jpg", ["idhant-ranjan.jpg"], 0.02, 1.0, 0.5],
    ["allen-xu-v3.jpg", ["allen-xu.jpg"], 0.12, 1.0, 0.5],
    ["steven-he-v3.jpg", ["steven-he.jpg"], 0.1, 1.0, 0.5],
    ["alice-ho-v3.jpg", ["alice-ho.jpg"], 0.06, 1.15, 0.92],
  ].map(([outName, sources, biasY, zoom, biasX]) => ({
    name: outName,
    async run() {
      const candidates = sources.flatMap((f) => [
        path.join(BACKUP, f),
        path.join(JUDGES, f),
      ]);
      const src = await resolveSource(candidates);
      if (!src) throw new Error(`Source missing for ${outName}`);
      const out = path.join(JUDGES, outName);
      const info = await smartPortrait(src, out, {
        positionBiasY: biasY,
        zoom,
        biasX,
      });
      return { out, info: { ...info, src } };
    },
  })),
];

async function main() {
  await mkdir(JUDGES, { recursive: true });
  await mkdir(BACKUP, { recursive: true });
  await mkdir(PREVIEW, { recursive: true });

  for (const job of JOBS) {
    const { out, info } = await job.run();
    // Backup the new output as well
    await copyFile(out, path.join(BACKUP, path.basename(out)));
    console.log(`OK ${path.basename(out)}`, info);

    const prev = path.join(PREVIEW, `out-${path.basename(out)}`);
    await sharp(out).resize(320, 400, { fit: "inside" }).jpeg({ quality: 80 }).toFile(prev);
  }

  console.log("\nAll judge headshots reprocessed to *-v3.jpg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Re-crop judge headshots with MORE headroom for aspect-[5/4] object-cover cards.
 * Leaves Daliana on *-v3.jpg. Writes cache-busted *-v4.jpg for everyone else.
 *
 * Also writes 5:4 cover simulations at object-position ~20% for visual QA.
 *
 * Run: node scripts/reprocess-judge-headshots-v4.mjs
 */
import sharp from "sharp";
import { mkdir, access } from "fs/promises";
import { constants } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const BACKUP = path.join(JUDGES, "_pre-recenter-backup");
const PREVIEW = path.join(JUDGES, "_preview");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";

const W = 800;
const H = 1000;
const ASPECT = W / H; // 4:5 portrait delivery
const COVER_ASPECT = 5 / 4; // JudgeCard aspect-[5/4]

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

async function resolveSource(candidates) {
  for (const c of candidates) {
    if (await exists(c)) return c;
  }
  return null;
}

async function finishJpeg(pipeline, out) {
  await pipeline
    .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);
}

/** Sample average color of a thin top strip for extend fill. */
async function topStripColor(input) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? 1;
  const srcH = meta.height ?? 1;
  const stripH = Math.max(1, Math.round(srcH * 0.02));
  const avg = await sharp(input)
    .rotate()
    .extract({ left: 0, top: 0, width: srcW, height: stripH })
    .resize(1, 1, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const [r, g, b] = avg.data;
  return { r, g, b, alpha: 1 };
}

/**
 * Fractional box → 4:5 extract snapped around box center, with optional
 * north bias so the crop prefers keeping the top of the box.
 */
async function fracCrop(input, out, { left, top, width, height, biasX = 0.5, northBias = 0.35 }) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? 0;
  const srcH = meta.height ?? 0;

  let l = Math.round(srcW * left);
  let t = Math.round(srcH * top);
  let w = Math.round(srcW * width);
  let h = Math.round(srcH * height);

  const cx = l + w * biasX;
  // northBias < 0.5 → crop window sits higher (more of box top kept)
  const cy = t + h * northBias;

  if (w / h > ASPECT) w = Math.round(h * ASPECT);
  else h = Math.round(w / ASPECT);

  l = Math.round(cx - w / 2);
  t = Math.round(cy - h * northBias);
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
 * For already-tight 4:5 backups: pad top with blurred mirrored strip so
 * hair is no longer flush to the edge, then re-export 800×1000.
 */
async function padHeadroomThenPortrait(
  input,
  out,
  { padFraction = 0.16, keepBottomFraction = 0.92, biasX = 0.5 } = {},
) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? W;
  const srcH = meta.height ?? H;
  const pad = Math.round(srcH * padFraction);
  const bg = await topStripColor(input);

  // Blurred top strip, flipped, as a more natural pad than flat color
  const stripH = Math.min(srcH, Math.max(pad, Math.round(srcH * 0.12)));
  const padStrip = await sharp(input)
    .rotate()
    .extract({ left: 0, top: 0, width: srcW, height: stripH })
    .flip()
    .blur(18)
    .resize(srcW, pad, { fit: "fill" })
    .toBuffer();

  const extendedH = srcH + pad;
  const composed = await sharp({
    create: {
      width: srcW,
      height: extendedH,
      channels: 3,
      background: bg,
    },
  })
    .composite([
      { input: padStrip, top: 0, left: 0 },
      {
        input: await sharp(input).rotate().toBuffer(),
        top: pad,
        left: 0,
      },
    ])
    .jpeg({ quality: 98 })
    .toBuffer();

  // Crop a 4:5 window from the padded image: include pad + most of body
  const usableH = Math.round(extendedH * keepBottomFraction);
  let cropH = Math.min(usableH, extendedH);
  let cropW = Math.round(cropH * ASPECT);
  if (cropW > srcW) {
    cropW = srcW;
    cropH = Math.round(cropW / ASPECT);
  }
  const left = Math.round((srcW - cropW) * biasX);
  // Pin near top so padded headroom stays
  const top = 0;

  await finishJpeg(
    sharp(composed)
      .extract({
        left: Math.max(0, Math.min(left, srcW - cropW)),
        top,
        width: cropW,
        height: cropH,
      })
      .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 }),
    out,
  );
  return { strategy: "padHeadroom", pad, cropW, cropH, biasX, srcW, srcH };
}

/**
 * Mild zoom-out portrait from an already-decent 4:5 source that has headroom.
 * positionBiasY low → keep top; zoom < 1 not used — zoom>=1 shrinks window.
 */
async function smartPortrait(input, out, { positionBiasY = 0.08, zoom = 1.0, biasX = 0.5 } = {}) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? W;
  const srcH = meta.height ?? H;

  let cropW;
  let cropH;
  if (srcW / srcH > ASPECT) {
    cropH = Math.round(srcH / Math.max(zoom, 1));
    cropW = Math.round(cropH * ASPECT);
  } else {
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
  return { strategy: `biasY=${positionBiasY},biasX=${biasX},zoom=${zoom}`, srcW, srcH, cropW, cropH, left, top };
}

/**
 * Simulate JudgeCard: aspect 5/4 object-cover with object-position center Y%.
 * CSS % formula: offset = (objSize - containerSize) * percent/100 for the overflow axis.
 */
async function simulateCover54(input, out, positionYPercent = 20) {
  const meta = await sharp(input).metadata();
  const srcW = meta.width ?? W;
  const srcH = meta.height ?? H;

  // Scale so width fills container; height overflows (portrait into landscape-ish 5:4)
  const containerW = 500;
  const containerH = Math.round(containerW / COVER_ASPECT); // 400
  const scale = containerW / srcW;
  const scaledH = srcH * scale;
  const overflow = scaledH - containerH;
  const yFrac = positionYPercent / 100;
  // object-position: percentage of the *extra* space
  const topScaled = overflow * yFrac;
  const topSrc = Math.round(topScaled / scale);
  const visibleH = Math.round(containerH / scale);

  await sharp(input)
    .extract({
      left: 0,
      top: Math.max(0, Math.min(topSrc, srcH - visibleH)),
      width: srcW,
      height: Math.min(visibleH, srcH),
    })
    .resize(containerW, containerH, { fit: "fill" })
    .jpeg({ quality: 85 })
    .toFile(out);
}

const JOBS = [
  {
    name: "ellen-finegan-v4.jpg",
    async run() {
      const src = await resolveSource([
        ELLEN_SRC,
        path.join(BACKUP, "ellen-finegan-v2.jpg"),
        path.join(JUDGES, "ellen-finegan-v2.jpg"),
      ]);
      if (!src) throw new Error("Ellen source missing");
      const out = path.join(JUDGES, "ellen-finegan-v4.jpg");
      // Landscape wood-panel solo: use FULL height (top:0), wider face box, mild zoom-out
      const info = await fracCrop(src, out, {
        left: 0.2,
        top: 0.0,
        width: 0.55,
        height: 1.0,
        biasX: 0.48,
        northBias: 0.28,
      });
      return { out, info: { ...info, src } };
    },
  },
  // Sources that already have headroom — preserve / mild reframe (do NOT cut top)
  {
    name: "steven-he-v4.jpg",
    async run() {
      const src = path.join(BACKUP, "steven-he.jpg");
      const out = path.join(JUDGES, "steven-he-v4.jpg");
      // Backup already has excellent headroom; keep almost full frame
      const info = await smartPortrait(src, out, { positionBiasY: 0.05, zoom: 1.02, biasX: 0.5 });
      return { out, info: { ...info, src } };
    },
  },
  {
    name: "owen-christy-v4.jpg",
    async run() {
      const src = path.join(BACKUP, "owen-christy.jpg");
      const out = path.join(JUDGES, "owen-christy-v4.jpg");
      const info = await smartPortrait(src, out, { positionBiasY: 0.1, zoom: 1.05, biasX: 0.55 });
      return { out, info: { ...info, src } };
    },
  },
  {
    name: "roselynne-orrala-v4.jpg",
    async run() {
      const src = path.join(BACKUP, "roselynne-orrala.jpg");
      const out = path.join(JUDGES, "roselynne-orrala-v4.jpg");
      const info = await smartPortrait(src, out, { positionBiasY: 0.05, zoom: 1.0, biasX: 0.5 });
      return { out, info: { ...info, src } };
    },
  },
  // Tight tops in backup — pad headroom then portrait
  ...[
    ["payton-schield-v4.jpg", "payton-schield.jpg", 0.18, 0.55],
    ["ryan-havlick-v4.jpg", "ryan-havlick.jpg", 0.16, 0.5],
    ["jack-ma-v4.jpg", "jack-ma.jpg", 0.18, 0.5],
    ["allen-xu-v4.jpg", "allen-xu.jpg", 0.17, 0.5],
    ["alice-ho-v4.jpg", "alice-ho.jpg", 0.2, 0.78], // face was right-biased
    ["idhant-ranjan-v4.jpg", "idhant-ranjan.jpg", 0.18, 0.5],
  ].map(([outName, backupName, padFraction, biasX]) => ({
    name: outName,
    async run() {
      const src = await resolveSource([
        path.join(BACKUP, backupName),
        path.join(JUDGES, backupName),
      ]);
      if (!src) throw new Error(`Source missing for ${outName}`);
      const out = path.join(JUDGES, outName);
      const info = await padHeadroomThenPortrait(src, out, {
        padFraction,
        keepBottomFraction: 0.96,
        biasX,
      });
      return { out, info: { ...info, src } };
    },
  })),
];

async function main() {
  await mkdir(JUDGES, { recursive: true });
  await mkdir(PREVIEW, { recursive: true });

  for (const job of JOBS) {
    const { out, info } = await job.run();
    console.log(`OK ${path.basename(out)}`, info);

    const prev = path.join(PREVIEW, `out-${path.basename(out)}`);
    await sharp(out).resize(320, 400, { fit: "inside" }).jpeg({ quality: 82 }).toFile(prev);

    // 5:4 cover sim at object-position 20% (matches CSS)
    const sim = path.join(PREVIEW, `cover54-${path.basename(out)}`);
    await simulateCover54(out, sim, 20);
    console.log(`  cover54 sim → ${path.basename(sim)}`);
  }

  // Also simulate Daliana v3 (unchanged) for comparison
  const daliana = path.join(JUDGES, "daliana-vargas-v3.jpg");
  if (await exists(daliana)) {
    await simulateCover54(daliana, path.join(PREVIEW, "cover54-daliana-vargas-v3.jpg"), 20);
    console.log("OK cover54-daliana-vargas-v3.jpg (reference, unchanged)");
  }

  console.log("\nAll judge headshots (except Daliana) reprocessed to *-v4.jpg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

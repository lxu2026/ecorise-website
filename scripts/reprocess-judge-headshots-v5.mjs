/**
 * Re-crop all Green Dream judges (except Daliana) to 800×1000 with
 * sharp cover crop ONLY — no blur pad, no letterbox extend.
 *
 * Run: node scripts/reprocess-judge-headshots-v5.mjs
 */
import sharp from "sharp";
import { access } from "fs/promises";
import { constants } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const BACKUP = path.join(JUDGES, "_pre-recenter-backup");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets\\c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images";

const W = 800;
const H = 1000;
const ASPECT = W / H;

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function resolve(cands) {
  for (const c of cands) {
    if (await exists(c)) return c;
  }
  return null;
}

const A = (name) => path.join(ASSETS, name);

/**
 * Cover-crop to 4:5 from real photo pixels only.
 * biasX: 0=left … 1=right (higher → crop window shifts right → subject moves left)
 * biasY: 0=top … 1=bottom (lower → more headroom preserved)
 */
async function coverCrop(input, out, { biasX = 0.5, biasY = 0.2, zoom = 1.0 } = {}) {
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

  const maxL = Math.max(0, srcW - cropW);
  const maxT = Math.max(0, srcH - cropH);
  const left = Math.round(maxL * biasX);
  const top = Math.round(maxT * biasY);

  await sharp(input)
    .rotate()
    .extract({
      left: Math.max(0, Math.min(left, maxL)),
      top: Math.max(0, Math.min(top, maxT)),
      width: cropW,
      height: cropH,
    })
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  return { srcW, srcH, cropW, cropH, left, top, biasX, biasY, zoom };
}

const JOBS = [
  // Face slightly right → higher biasX centers by shifting crop right
  {
    out: "allen-xu-v5.jpg",
    sources: [A("image-e591b4c5-78de-4ff2-864e-2f42571385b8.png"), path.join(BACKUP, "allen-xu.jpg")],
    biasX: 0.62,
    biasY: 0.16,
    zoom: 1.0,
  },
  {
    out: "idhant-ranjan-v5.jpg",
    sources: [A("image-cde83b54-31a1-44be-8c78-49cf678056fd.png"), path.join(BACKUP, "idhant-ranjan.jpg")],
    biasX: 0.58,
    biasY: 0.12,
    zoom: 1.0,
  },
  // Pillar left / face right → strong right bias
  {
    out: "alice-ho-v5.jpg",
    sources: [
      A("image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png"),
      path.join(BACKUP, "alice-ho.jpg"),
    ],
    biasX: 0.78,
    biasY: 0.12,
    zoom: 1.05,
  },
  // Face was left → shift crop right
  {
    out: "owen-christy-v5.jpg",
    sources: [A("image-8f3d7672-3c7d-470e-a065-00f153d27a33.png"), path.join(BACKUP, "owen-christy.jpg")],
    biasX: 0.7,
    biasY: 0.18,
    zoom: 1.05,
  },
  // Landscape wood-panel; face right of center in prior bad crops → bias left of midpoint… 
  // Face appears right in card → crop further right (higher biasX) OR for landscape full-height extract:
  {
    out: "ellen-finegan-v5.jpg",
    sources: [
      A("Untitled_design__2_-d46aed82-81fe-44f8-a4ff-1282d4825390.png"),
      path.join(BACKUP, "ellen-finegan-v2.jpg"),
    ],
    biasX: 0.38,
    biasY: 0.0,
    zoom: 1.0,
  },
  {
    out: "payton-schield-v5.jpg",
    sources: [A("image-7c3fb1e0-bd85-488c-9476-8cd81173538e.png"), path.join(BACKUP, "payton-schield.jpg")],
    biasX: 0.52,
    biasY: 0.2,
    zoom: 1.05,
  },
  {
    out: "roselynne-orrala-v5.jpg",
    sources: [A("image-c1bcb5c4-ee9e-4f6c-9bcc-833d2672a273.png"), path.join(BACKUP, "roselynne-orrala.jpg")],
    biasX: 0.5,
    biasY: 0.16,
    zoom: 1.0,
  },
  {
    out: "jack-ma-v5.jpg",
    sources: [A("image-53bda600-71f9-4cf0-af0b-80dcb2c8f759.png"), path.join(BACKUP, "jack-ma.jpg")],
    biasX: 0.5,
    biasY: 0.12,
    zoom: 1.0,
  },
  {
    out: "ryan-havlick-v5.jpg",
    sources: [path.join(BACKUP, "ryan-havlick.jpg"), path.join(JUDGES, "ryan-havlick.jpg")],
    biasX: 0.64,
    biasY: 0.18,
    zoom: 1.0,
  },
  {
    out: "steven-he-v5.jpg",
    sources: [path.join(BACKUP, "steven-he.jpg"), path.join(JUDGES, "steven-he.jpg")],
    biasX: 0.5,
    biasY: 0.2,
    zoom: 1.02,
  },
];

async function main() {
  for (const job of JOBS) {
    const src = await resolve(job.sources);
    if (!src) {
      console.error("MISSING", job.out);
      continue;
    }
    const out = path.join(JUDGES, job.out);
    const info = await coverCrop(src, out, {
      biasX: job.biasX,
      biasY: job.biasY,
      zoom: job.zoom,
    });
    console.log("OK", job.out, { ...info, src: path.basename(src) });
  }
  console.log("\nDaliana left unchanged (daliana-vargas-v3.jpg).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

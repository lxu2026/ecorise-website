/**
 * Generate tight face-centered crop variants for problem judges, then apply winners.
 */
import sharp from "sharp";
import { copyFile } from "fs/promises";
import path from "path";

const JUDGES = "C:\\ecorise-website\\public\\images\\green-dream\\judges";
const BACKUP = path.join(JUDGES, "_pre-recenter-backup");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const PREVIEW = path.join(JUDGES, "_preview");

const W = 800;
const H = 1000;
const ASPECT = W / H;

const DALIANA = path.join(
  ASSETS,
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-7e116dd6-3300-43c1-b08a-e18b89fb06d9.png",
);
const ELLEN = path.join(
  ASSETS,
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Untitled_design__2_-d46aed82-81fe-44f8-a4ff-1282d4825390.png",
);

async function fracCrop(input, out, { left, top, width, height }) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? 0;
  const srcH = meta.height ?? 0;

  let l = Math.round(srcW * left);
  let t = Math.round(srcH * top);
  let w = Math.round(srcW * width);
  let h = Math.round(srcH * height);
  const cx = l + w / 2;
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

  await sharp(input)
    .rotate()
    .extract({ left: l, top: t, width: w, height: h })
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  return { l, t, w, h, srcW, srcH };
}

async function preview(src, name) {
  await sharp(src)
    .resize(300, 375, { fit: "inside" })
    .jpeg({ quality: 80 })
    .toFile(path.join(PREVIEW, name));
}

// --- Daliana variants (aggressive top cut) ---
const dalianaVariants = [
  { id: "d-a", left: 0.08, top: 0.38, width: 0.84, height: 0.58 },
  { id: "d-b", left: 0.1, top: 0.42, width: 0.8, height: 0.54 },
  { id: "d-c", left: 0.12, top: 0.45, width: 0.76, height: 0.5 },
  { id: "d-d", left: 0.1, top: 0.4, width: 0.82, height: 0.52 },
];

for (const v of dalianaVariants) {
  const out = path.join(PREVIEW, `${v.id}.jpg`);
  const info = await fracCrop(DALIANA, out, v);
  console.log(v.id, info);
}

// --- Steven from backup ---
const stevenSrc = path.join(BACKUP, "steven-he.jpg");
const stevenVariants = [
  { id: "s-a", left: 0.05, top: 0.28, width: 0.9, height: 0.65 },
  { id: "s-b", left: 0.08, top: 0.32, width: 0.84, height: 0.58 },
  { id: "s-c", left: 0.1, top: 0.35, width: 0.8, height: 0.55 },
];
for (const v of stevenVariants) {
  const out = path.join(PREVIEW, `${v.id}.jpg`);
  const info = await fracCrop(stevenSrc, out, v);
  console.log(v.id, info);
}

// --- Alice from backup: shift right, cut headroom ---
const aliceSrc = path.join(BACKUP, "alice-ho.jpg");
const aliceVariants = [
  { id: "a-a", left: 0.22, top: 0.12, width: 0.72, height: 0.78 },
  { id: "a-b", left: 0.28, top: 0.15, width: 0.68, height: 0.72 },
  { id: "a-c", left: 0.25, top: 0.1, width: 0.7, height: 0.75 },
];
for (const v of aliceVariants) {
  const out = path.join(PREVIEW, `${v.id}.jpg`);
  const info = await fracCrop(aliceSrc, out, v);
  console.log(v.id, info);
}

// --- Owen from backup: tighter ---
const owenSrc = path.join(BACKUP, "owen-christy.jpg");
const owenVariants = [
  { id: "o-a", left: 0.08, top: 0.12, width: 0.84, height: 0.72 },
  { id: "o-b", left: 0.1, top: 0.15, width: 0.8, height: 0.68 },
];
for (const v of owenVariants) {
  const out = path.join(PREVIEW, `${v.id}.jpg`);
  const info = await fracCrop(owenSrc, out, v);
  console.log(v.id, info);
}

// --- Roselynne tighter ---
const rosSrc = path.join(BACKUP, "roselynne-orrala.jpg");
{
  const out = path.join(PREVIEW, "r-a.jpg");
  console.log("r-a", await fracCrop(rosSrc, out, { left: 0.08, top: 0.1, width: 0.84, height: 0.72 }));
}

console.log("Variants ready in _preview");

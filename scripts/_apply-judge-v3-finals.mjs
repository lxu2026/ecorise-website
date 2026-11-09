/**
 * Write face-centered finals into the *-v3.jpg paths site-photos currently uses.
 */
import sharp from "sharp";
import { copyFile } from "fs/promises";
import path from "path";

const JUDGES = "C:\\ecorise-website\\public\\images\\green-dream\\judges";
const BACKUP = path.join(JUDGES, "_pre-recenter-backup");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
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

async function fracCrop(input, out, box) {
  const meta = await sharp(input).rotate().metadata();
  const srcW = meta.width ?? 0;
  const srcH = meta.height ?? 0;
  let l = Math.round(srcW * box.left);
  let t = Math.round(srcH * box.top);
  let w = Math.round(srcW * box.width);
  let h = Math.round(srcH * box.height);
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
  console.log("OK", path.basename(out), { l, t, w, h });
}

// Prefer original backups for re-crops (pre-our first pass)
const src = (name) => {
  const b = path.join(BACKUP, name);
  return b;
};

// Daliana: aggressive cut of glass ceiling — face in upper third
await fracCrop(DALIANA, path.join(JUDGES, "daliana-vargas-v3.jpg"), {
  left: 0.14,
  top: 0.48,
  width: 0.72,
  height: 0.46,
});
// Also refresh v2 alias
await copyFile(
  path.join(JUDGES, "daliana-vargas-v3.jpg"),
  path.join(JUDGES, "daliana-vargas-v2.jpg"),
);

// Ellen: wood-panel solo, face slightly above center
await fracCrop(ELLEN, path.join(JUDGES, "ellen-finegan-v3.jpg"), {
  left: 0.14,
  top: 0.06,
  width: 0.72,
  height: 0.88,
});
await copyFile(
  path.join(JUDGES, "ellen-finegan-v3.jpg"),
  path.join(JUDGES, "ellen-finegan-v2.jpg"),
);

const fromBackup = [
  ["steven-he.jpg", "steven-he-v3.jpg", { left: 0.1, top: 0.35, width: 0.8, height: 0.55 }],
  ["alice-ho.jpg", "alice-ho-v3.jpg", { left: 0.28, top: 0.15, width: 0.68, height: 0.72 }],
  ["owen-christy.jpg", "owen-christy-v3.jpg", { left: 0.1, top: 0.15, width: 0.8, height: 0.68 }],
  ["roselynne-orrala.jpg", "roselynne-orrala-v3.jpg", { left: 0.08, top: 0.1, width: 0.84, height: 0.72 }],
  ["payton-schield.jpg", "payton-schield-v3.jpg", { left: 0.08, top: 0.08, width: 0.84, height: 0.75 }],
  ["idhant-ranjan.jpg", "idhant-ranjan-v3.jpg", { left: 0.06, top: 0.05, width: 0.88, height: 0.8 }],
  ["jack-ma.jpg", "jack-ma-v3.jpg", { left: 0.06, top: 0.02, width: 0.88, height: 0.82 }],
  ["ryan-havlick.jpg", "ryan-havlick-v3.jpg", { left: 0.06, top: 0.02, width: 0.88, height: 0.85 }],
  ["allen-xu.jpg", "allen-xu-v3.jpg", { left: 0.05, top: 0.0, width: 0.9, height: 0.88 }],
];

for (const [backupName, outName, box] of fromBackup) {
  await fracCrop(src(backupName), path.join(JUDGES, outName), box);
  // keep non-v3 in sync too
  const base = outName.replace("-v3", "");
  await copyFile(path.join(JUDGES, outName), path.join(JUDGES, base));
}

console.log("All v3 finals written.");

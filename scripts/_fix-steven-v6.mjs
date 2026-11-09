import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "fs";

const SRC =
  "C:/Users/User/.cursor/projects/c-ecorise-website/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png";
const OUT = "public/images/green-dream/judges/steven-he-v6.jpg";
const W = 800;
const H = 1000;
const ASPECT = W / H;
// Aggressive zoom so face matches Alice/Allen/Idhant head scale
const zoom = 2.05;
const biasX = 0.5;
// Face sits lower in source — push crop down, cut empty/blur top
const biasY = 0.62;

const meta = await sharp(SRC).rotate().metadata();
const srcW = meta.width;
const srcH = meta.height;
let cropW;
let cropH;
if (srcW / srcH > ASPECT) {
  cropH = Math.round(srcH / zoom);
  cropW = Math.round(cropH * ASPECT);
} else {
  cropW = Math.round(srcW / zoom);
  cropH = Math.round(cropW / ASPECT);
}
cropW = Math.min(cropW, srcW);
cropH = Math.min(cropH, srcH);
const maxL = Math.max(0, srcW - cropW);
const maxT = Math.max(0, srcH - cropH);
const left = Math.round(maxL * biasX);
const top = Math.round(maxT * biasY);

await sharp(SRC)
  .rotate()
  .extract({ left, top, width: cropW, height: cropH })
  .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
  .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(OUT);

const st = statSync(OUT);
console.log("WROTE", OUT, st.size, { srcW, srcH, cropW, cropH, left, top, zoom, biasY });

const sp = "lib/site-photos.ts";
let t = readFileSync(sp, "utf8");
const next = t.replace(
  /stevenHe:\s*"[^"]+"/,
  'stevenHe: "/images/green-dream/judges/steven-he-v6.jpg"',
);
if (next === t) throw new Error("site-photos stevenHe path not updated");
writeFileSync(sp, next);
console.log("UPDATED site-photos stevenHe -> v6");

/**
 * Steven He v9: head-and-shoulders matching Allen scale.
 * Full hair + headroom, face upper-middle, no blur pad.
 *
 * Run: node scripts/_fix-steven-v9.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "fs";

const SRC =
  "C:/Users/User/.cursor/projects/c-ecorise-website/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png";
const OUT = "public/images/green-dream/judges/steven-he-v9.jpg";
const W = 800;
const H = 1000;
const ASPECT = W / H;

// Source: face low under tall sky. Hair ~48%, eyes ~55%, chest ~72%.
// Milder zoom than v8 so face scale matches Allen head-and-shoulders.
const faceX = 0.5;
const faceY = 0.55; // eyes / face center in source
const faceYOut = 0.34; // upper-middle in output (leaves ~10% headroom above hair)
const zoom = 1.72;

const meta = await sharp(SRC).rotate().metadata();
const srcW = meta.width;
const srcH = meta.height;

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

let left = Math.round(faceX * srcW - cropW * 0.5);
let top = Math.round(faceY * srcH - cropH * faceYOut);
left = Math.max(0, Math.min(left, srcW - cropW));
top = Math.max(0, Math.min(top, srcH - cropH));

// Ensure ~8–12% headroom above estimated hairline (~48% of source)
const hairY = Math.round(srcH * 0.48);
const headroomFrac = (hairY - top) / cropH;
if (headroomFrac < 0.07) {
  // Pull crop down so hair isn't clipped
  top = Math.max(0, Math.min(hairY - Math.round(cropH * 0.1), srcH - cropH));
}

await sharp(SRC)
  .rotate()
  .extract({ left, top, width: cropW, height: cropH })
  .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
  .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(OUT);

const st = statSync(OUT);
console.log("WROTE", OUT, st.size, {
  srcW,
  srcH,
  cropW,
  cropH,
  left,
  top,
  zoom,
  faceY,
  faceYOut,
  headroomFrac: ((hairY - top) / cropH).toFixed(3),
});

const sp = "lib/site-photos.ts";
let t = readFileSync(sp, "utf8");
const next = t.replace(
  /stevenHe:\s*"[^"]+"/,
  'stevenHe: "/images/green-dream/judges/steven-he-v9.jpg"',
);
if (next === t) throw new Error("site-photos stevenHe path not updated");
writeFileSync(sp, next);
console.log("UPDATED site-photos stevenHe -> v9");

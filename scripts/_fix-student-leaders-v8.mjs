/**
 * Face-centered 800×1000 cover crops for the four Student Leaders.
 * No blur pad. Anchors on explicit face centers so noses sit mid-frame.
 *
 * Run: node scripts/_fix-student-leaders-v8.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const P = (name) =>
  path.join(
    ASSETS,
    `c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_${name}`,
  );

const W = 800;
const H = 1000;
const ASPECT = W / H;

/**
 * Cover-crop to 4:5 anchored on a face point.
 * faceX/faceY: normalized source coords of nose / face center
 * faceYOut: where that point lands in the output (0=top … 1=bottom); ~0.34 = upper-middle
 * zoom: >1 = tighter crop (larger face)
 */
async function faceCover(input, out, { faceX, faceY, faceYOut = 0.34, zoom = 1.15 }) {
  const meta = await sharp(input).rotate().metadata();
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

  await sharp(input)
    .rotate()
    .extract({ left, top, width: cropW, height: cropH })
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  return { srcW, srcH, cropW, cropH, left, top, faceX, faceY, faceYOut, zoom };
}

const JOBS = [
  // Source face ~right; v8 pass1 still slight right → nudge faceX up.
  {
    key: "allenXu",
    out: "allen-xu-v8.jpg",
    src: P("image-e591b4c5-78de-4ff2-864e-2f42571385b8.png"),
    faceX: 0.64,
    faceY: 0.36,
    faceYOut: 0.33,
    zoom: 1.12,
  },
  // Source: huge sky; face low. Pass1 left-lean + tight → ease zoom, nudge X.
  {
    key: "stevenHe",
    out: "steven-he-v8.jpg",
    src: P("image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png"),
    faceX: 0.48,
    faceY: 0.56,
    faceYOut: 0.33,
    zoom: 2.2,
  },
  // Pass1 overshot left (faceX 0.64 too high) → drop toward true nose ~0.56.
  {
    key: "aliceHo",
    out: "alice-ho-v8.jpg",
    src: P("image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png"),
    faceX: 0.56,
    faceY: 0.34,
    faceYOut: 0.33,
    zoom: 1.18,
  },
  // Pass1 overshot left → near mid with slight right-source bias.
  {
    key: "idhantRanjan",
    out: "idhant-ranjan-v8.jpg",
    src: P("image-cde83b54-31a1-44be-8c78-49cf678056fd.png"),
    faceX: 0.51,
    faceY: 0.4,
    faceYOut: 0.36,
    zoom: 1.1,
  },
];

const results = [];
for (const job of JOBS) {
  const out = path.join(JUDGES, job.out);
  const info = await faceCover(job.src, out, job);
  const st = statSync(out);
  console.log("WROTE", job.out, st.size, info);
  results.push(job);
}

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
const replacements = {
  allenXu: "allen-xu-v8.jpg",
  stevenHe: "steven-he-v8.jpg",
  aliceHo: "alice-ho-v8.jpg",
  idhantRanjan: "idhant-ranjan-v8.jpg",
};
for (const [key, file] of Object.entries(replacements)) {
  const re = new RegExp(`${key}:\\s*"[^"]+"`);
  const next = t.replace(re, `${key}: "/images/green-dream/judges/${file}"`);
  if (next === t) throw new Error(`site-photos ${key} path not updated`);
  t = next;
}
writeFileSync(sp, t);
console.log("UPDATED site-photos → v8 for all four student leaders");

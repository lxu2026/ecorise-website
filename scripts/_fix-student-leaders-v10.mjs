/**
 * Student Leaders v10 — true horizontal center compromise.
 * Midway between v5 right-lean and v8 left-lean. No blur pad.
 *
 * Run: node scripts/_fix-student-leaders-v10.mjs
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
 * Cover-crop to 4:5 anchored on face center.
 * faceX/faceY: nose / face center in source (0–1)
 * faceYOut: where face lands in output (~0.34 = upper-middle w/ headroom)
 */
async function faceCover(input, out, { faceX, faceY, faceYOut = 0.34, zoom = 1.12, hairY }) {
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

  // Guarantee ~9% headroom above hair if hairY provided
  if (typeof hairY === "number") {
    const hairPx = Math.round(srcH * hairY);
    const headroom = (hairPx - top) / cropH;
    if (headroom < 0.08) {
      top = Math.max(0, Math.min(hairPx - Math.round(cropH * 0.1), srcH - cropH));
    }
  }

  await sharp(input)
    .rotate()
    .extract({ left, top, width: cropW, height: cropH })
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  return { srcW, srcH, cropW, cropH, left, top, faceX, faceY, faceYOut, zoom };
}

// faceX = compromise between right-heavy (v5) and left-heavy (v8) anchors
const JOBS = [
  {
    key: "allenXu",
    out: "allen-xu-v10.jpg",
    src: P("image-e591b4c5-78de-4ff2-864e-2f42571385b8.png"),
    // v5≈0.52 anchor / actual~0.60 right; v8 0.64 left → true ~0.60
    faceX: 0.6,
    faceY: 0.36,
    faceYOut: 0.33,
    zoom: 1.1,
    hairY: 0.12,
  },
  {
    key: "stevenHe",
    out: "steven-he-v10.jpg",
    src: P("image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png"),
    // Source face ~mid; prior left cut = crop too far right. Center + Allen-like scale.
    faceX: 0.5,
    faceY: 0.55,
    faceYOut: 0.34,
    zoom: 1.68,
    hairY: 0.48,
  },
  {
    key: "aliceHo",
    out: "alice-ho-v10.jpg",
    src: P("image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png"),
    // v5≈0.57 / v8 0.64 left → compromise ~0.60
    faceX: 0.6,
    faceY: 0.34,
    faceYOut: 0.33,
    zoom: 1.12,
    hairY: 0.14,
  },
  {
    key: "idhantRanjan",
    out: "idhant-ranjan-v10.jpg",
    src: P("image-cde83b54-31a1-44be-8c78-49cf678056fd.png"),
    // v5≈0.52 / v8 0.56 left → compromise ~0.535
    faceX: 0.535,
    faceY: 0.4,
    faceYOut: 0.35,
    zoom: 1.08,
    hairY: 0.08,
  },
];

for (const job of JOBS) {
  const out = path.join(JUDGES, job.out);
  const info = await faceCover(job.src, out, job);
  console.log("WROTE", job.out, statSync(out).size, info);
}

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
for (const job of JOBS) {
  const re = new RegExp(`${job.key}:\\s*"[^"]+"`);
  const next = t.replace(
    re,
    `${job.key}: "/images/green-dream/judges/${job.out}"`,
  );
  if (next === t) throw new Error(`site-photos ${job.key} not updated`);
  t = next;
}
writeFileSync(sp, t);
console.log("UPDATED site-photos → v10 for all four student leaders");

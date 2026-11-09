/**
 * ONE pass: midpoint between left-heavy *-final and right-heavy *-final2.
 * Writes *-final3.jpg, updates site-photos. Allen + Alice only.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync, existsSync } from "fs";
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

async function faceCover(input, out, { faceX, faceY, faceYOut = 0.34, zoom = 1.1, hairY }) {
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

  if (typeof hairY === "number") {
    const hairPx = Math.round(srcH * hairY);
    if ((hairPx - top) / cropH < 0.09) {
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

  return { srcW, srcH, cropW, cropH, left, top, faceX, zoom };
}

// Allen: final left-heavy faceX 0.62 zoom 1.02 | final2 right-heavy faceX 0.36 zoom 1.28
// Alice: final right-heavy faceX 0.52 | left-heavy overshoot ~0.61 | final2 0.56 still right
const JOBS = [
  {
    key: "allenXu",
    out: "allen-xu-final3.jpg",
    src: P("image-e591b4c5-78de-4ff2-864e-2f42571385b8.png"),
    faceX: 0.49, // (0.62 + 0.36) / 2
    faceY: 0.38,
    faceYOut: 0.34,
    zoom: 1.15, // (1.02 + 1.28) / 2
    hairY: 0.1,
  },
  {
    key: "aliceHo",
    out: "alice-ho-final3.jpg",
    src: P("image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png"),
    // final 0.52 right-heavy; left-heavy overshoot 0.70; true face ~0.60–0.62 in source
    faceX: 0.60, // midpoint of 0.52 and 0.68 / source face center
    faceY: 0.34,
    faceYOut: 0.34,
    zoom: 1.55,
    hairY: 0.12,
  },
];

for (const job of JOBS) {
  if (!existsSync(job.src)) throw new Error(`MISSING source: ${job.src}`);
  const out = path.join(JUDGES, job.out);
  const info = await faceCover(job.src, out, job);
  console.log("WROTE", job.out, statSync(out).size, info);
}

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
for (const job of JOBS) {
  const target = `${job.key}: "/images/green-dream/judges/${job.out}"`;
  const re = new RegExp(`${job.key}:\\s*"[^"]+"`);
  if (!re.test(t)) throw new Error(`site-photos missing ${job.key}`);
  t = t.replace(re, target);
}
writeFileSync(sp, t);
console.log("UPDATED site-photos → final3 for allenXu, aliceHo");

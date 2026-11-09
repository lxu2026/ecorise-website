/**
 * ONE pass:
 * - Restore Steven He → steven-he-v5.jpg (best headroom; no re-crop)
 * - Alice Ho → alice-ho-final4.jpg (shift face right toward true center)
 * - Allen Xu untouched
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync, existsSync, unlinkSync } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const SRC = path.join(
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets",
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png",
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

async function faceCenterX(file) {
  const { data, info } = await sharp(file)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  let sumX = 0;
  let sumW = 0;
  for (let y = Math.floor(h * 0.15); y < Math.floor(h * 0.45); y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r > 95 && g > 65 && b > 45 && r > b && r > g * 0.8 && r - b > 12) {
        sumX += x;
        sumW++;
      }
    }
  }
  return sumW ? sumX / sumW / w : null;
}

if (!existsSync(SRC)) throw new Error(`MISSING Alice source: ${SRC}`);

const v5 = path.join(JUDGES, "steven-he-v5.jpg");
if (!existsSync(v5)) throw new Error("MISSING steven-he-v5.jpg");

// final3 faceX 0.60 → faceCenter ~0.34 (too left).
// Right-centered probe faceX 0.48 → face visually right of mid.
// Midpoint faceX 0.54 still left; calibrated true mid ≈ faceX 0.52 (faceCenter ~0.49),
// matching Allen's acceptable ~0.53 band and cutting right-side empty space vs final3.
const out = path.join(JUDGES, "alice-ho-final4.jpg");
const info = await faceCover(SRC, out, {
  faceX: 0.52,
  faceY: 0.34,
  faceYOut: 0.34,
  zoom: 1.55,
  hairY: 0.12,
});
const cx = await faceCenterX(out);
console.log("WROTE alice-ho-final4.jpg", statSync(out).size, info, "centerX", cx?.toFixed(3));

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
const allenBefore = t.match(/allenXu:\s*"[^"]+"/)?.[0];
t = t.replace(
  /stevenHe:\s*"[^"]+"/,
  'stevenHe: "/images/green-dream/judges/steven-he-v5.jpg"',
);
t = t.replace(
  /aliceHo:\s*"[^"]+"/,
  'aliceHo: "/images/green-dream/judges/alice-ho-final4.jpg"',
);
const allenAfter = t.match(/allenXu:\s*"[^"]+"/)?.[0];
if (allenBefore !== allenAfter) throw new Error("Allen path was modified — abort");
if (!allenAfter?.includes("allen-xu-final3.jpg")) {
  throw new Error(`Unexpected Allen path: ${allenAfter}`);
}
writeFileSync(sp, t);

const verify = readFileSync(sp, "utf8");
for (const [key, file] of [
  ["allenXu", "allen-xu-final3.jpg"],
  ["stevenHe", "steven-he-v5.jpg"],
  ["aliceHo", "alice-ho-final4.jpg"],
]) {
  const m = verify.match(new RegExp(`${key}:\\s*"([^"]+)"`));
  const rel = m?.[1];
  const abs = path.join(ROOT, "public", rel.replace(/^\//, ""));
  if (!rel?.endsWith(file) || !existsSync(abs)) {
    throw new Error(`VERIFY FAIL ${key}: ${rel} exists=${existsSync(abs)}`);
  }
  console.log("VERIFY OK", key, rel, statSync(abs).size);
}

console.log("DONE — Steven→v5, Alice→final4, Allen untouched");

/**
 * ONE pass: Steven He → steven-he-final5.jpg
 * Allen-like face scale, v5-like headroom (not cut-off). No blur pad.
 * Allen / Alice / Idhant untouched.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync, existsSync } from "fs";
import path from "path";

const ROOT = "C:\\ecorise-website";
const JUDGES = path.join(ROOT, "public", "images", "green-dream", "judges");
const SRC = path.join(
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets",
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png",
);
const OUT = path.join(JUDGES, "steven-he-final5.jpg");
const W = 800;
const H = 1000;
const ASPECT = W / H;

// Source anchors: hair~0.48, eyes~0.55.
// Cutoffs were zoom ≥1.65–2.2; v5 ≈1.02. Target midpoint with v5 headroom.
const faceX = 0.5;
const faceY = 0.55;
const faceYOut = 0.36;
const zoom = 1.48;
const hairY = 0.48;
const minHeadroom = 0.1;

if (!existsSync(SRC)) throw new Error(`MISSING source: ${SRC}`);
if (!existsSync(path.join(JUDGES, "steven-he-v5.jpg"))) {
  throw new Error("MISSING steven-he-v5.jpg");
}

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

const hairPx = Math.round(srcH * hairY);
if ((hairPx - top) / cropH < minHeadroom) {
  top = Math.max(
    0,
    Math.min(hairPx - Math.round(cropH * minHeadroom), srcH - cropH),
  );
}

await sharp(SRC)
  .rotate()
  .extract({ left, top, width: cropW, height: cropH })
  .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
  .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(OUT);

const headroom = (hairPx - top) / cropH;
console.log("WROTE steven-he-final5.jpg", statSync(OUT).size, {
  srcW,
  srcH,
  cropW,
  cropH,
  left,
  top,
  zoom,
  faceY,
  faceYOut,
  headroom: +headroom.toFixed(3),
});

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
const before = {
  allen: t.match(/allenXu:\s*"[^"]+"/)?.[0],
  alice: t.match(/aliceHo:\s*"[^"]+"/)?.[0],
  idhant: t.match(/idhantRanjan:\s*"[^"]+"/)?.[0],
};
const next = t.replace(
  /stevenHe:\s*"[^"]+"/,
  'stevenHe: "/images/green-dream/judges/steven-he-final5.jpg"',
);
if (next === t) throw new Error("site-photos stevenHe path not updated");
writeFileSync(sp, next);

const verify = readFileSync(sp, "utf8");
const after = {
  allen: verify.match(/allenXu:\s*"[^"]+"/)?.[0],
  alice: verify.match(/aliceHo:\s*"[^"]+"/)?.[0],
  idhant: verify.match(/idhantRanjan:\s*"[^"]+"/)?.[0],
  steven: verify.match(/stevenHe:\s*"[^"]+"/)?.[0],
};
if (after.allen !== before.allen) throw new Error("Allen was modified — abort");
if (after.alice !== before.alice) throw new Error("Alice was modified — abort");
if (after.idhant !== before.idhant) throw new Error("Idhant was modified — abort");
if (!after.steven?.includes("steven-he-final5.jpg")) {
  throw new Error(`Steven path wrong: ${after.steven}`);
}
if (!existsSync(OUT)) throw new Error("final5 missing after write");

console.log("VERIFY OK", after.steven);
console.log("UNTOUCHED", before);

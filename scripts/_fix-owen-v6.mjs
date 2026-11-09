/**
 * Re-crop Owen Christy tighter to match Jack/Roselynne face scale.
 * Cover crop from real pixels only — no blur pad.
 * Run: node scripts/_fix-owen-v6.mjs
 */
import sharp from "sharp";
import path from "path";

const SRC =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets\\c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-8f3d7672-3c7d-470e-a065-00f153d27a33.png";
const JUDGES = "C:\\ecorise-website\\public\\images\\green-dream\\judges";
const PREVIEW = path.join(JUDGES, "_preview");
const W = 800;
const H = 1000;
const ASPECT = W / H;

async function extractCrop(out, { left, top, width, height }) {
  const meta = await sharp(SRC).rotate().metadata();
  const srcW = meta.width ?? 0;
  const srcH = meta.height ?? 0;

  let w = width;
  let h = height;
  if (w / h > ASPECT) w = Math.round(h * ASPECT);
  else h = Math.round(w / ASPECT);

  let l = Math.max(0, Math.min(left, srcW - w));
  let t = Math.max(0, Math.min(top, srcH - h));
  w = Math.min(w, srcW - l);
  h = Math.min(h, srcH - t);

  await sharp(SRC)
    .rotate()
    .extract({ left: l, top: t, width: w, height: h })
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45, m1: 0.3, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  return { l, t, w, h };
}

const candidates = [
  // Tighter + crop shifted right (face was right of center in looser crops)
  { id: "ow6-a", left: 235, top: 235, width: 360, height: 450 },
  { id: "ow6-b", left: 240, top: 245, width: 350, height: 438 },
  { id: "ow6-c", left: 230, top: 240, width: 370, height: 463 },
  { id: "ow6-d", left: 245, top: 250, width: 340, height: 425 },
  { id: "ow6-e", left: 228, top: 228, width: 380, height: 475 },
  { id: "ow6-f", left: 250, top: 255, width: 330, height: 413 },
];

for (const c of candidates) {
  const out = path.join(PREVIEW, `${c.id}.jpg`);
  console.log(c.id, await extractCrop(out, c));
}

// Pick ow6-c as production default (balanced tight zoom); override below if needed
const WINNER = "ow6-c";
const outPath = path.join(JUDGES, "owen-christy-v6.jpg");
console.log(
  "WRITE",
  await extractCrop(outPath, candidates.find((c) => c.id === WINNER)),
);

// Comparison strip: Roselynne | Owen-v5 | Jack | winner
const stripFiles = [
  path.join(JUDGES, "roselynne-orrala-v5.jpg"),
  path.join(JUDGES, "owen-christy-v5.jpg"),
  path.join(JUDGES, "jack-ma-v5.jpg"),
  outPath,
];
const thumbs = await Promise.all(
  stripFiles.map((f) => sharp(f).resize(180, 225, { fit: "fill" }).toBuffer()),
);
await sharp({
  create: { width: 180 * 4, height: 225, channels: 3, background: "#000" },
})
  .composite(thumbs.map((buf, i) => ({ input: buf, left: i * 180, top: 0 })))
  .jpeg({ quality: 90 })
  .toFile(path.join(PREVIEW, "owen-v6-vs-neighbors.jpg"));

console.log("Done: owen-christy-v6.jpg + preview strip");

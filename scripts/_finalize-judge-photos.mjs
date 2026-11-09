/**
 * ONE clean final pass for Green Dream judge photos.
 * Writes only *-final.jpg (no new vN churn). Cover crop — no blur pad.
 *
 * Run: node scripts/_finalize-judge-photos.mjs
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

function resolve(cands) {
  for (const c of cands) {
    if (existsSync(c)) return c;
  }
  return null;
}

/**
 * Cover-crop to 4:5 anchored on face center.
 * faceX/faceY: face center in source (0–1)
 * faceYOut: where face lands in output (~0.34 = upper-middle w/ headroom)
 */
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

  // Guarantee ~10% headroom above hair if hairY provided
  if (typeof hairY === "number") {
    const hairPx = Math.round(srcH * hairY);
    const headroom = (hairPx - top) / cropH;
    if (headroom < 0.09) {
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

  return { srcW, srcH, cropW, cropH, left, top, zoom };
}

const JOBS = [
  // A) Daliana — tight headshot matching Payton face size, full head, centered
  {
    key: "dalianaVargas",
    out: "daliana-vargas-final.jpg",
    src: resolve([
      path.join(JUDGES, "daliana-vargas.jpg"),
      path.join(JUDGES, "_pre-recenter-backup", "daliana-vargas.jpg"),
    ]),
    // Match Payton ~40% head height; keep full head
    faceX: 0.5,
    faceY: 0.52,
    faceYOut: 0.4,
    zoom: 2.55,
    hairY: 0.41,
  },
  // B) Student Leaders — true center compromise, similar face scale, Steven full head
  {
    key: "allenXu",
    out: "allen-xu-final.jpg",
    src: resolve([
      P("image-e591b4c5-78de-4ff2-864e-2f42571385b8.png"),
      path.join(JUDGES, "_pre-recenter-backup", "allen-xu.jpg"),
    ]),
    // Was left-leaning; nudge faceX up + slight pullback for headroom
    faceX: 0.62,
    faceY: 0.38,
    faceYOut: 0.34,
    zoom: 1.02,
    hairY: 0.1,
  },
  {
    key: "stevenHe",
    out: "steven-he-final.jpg",
    src: resolve([
      P("image-9eb9b174-423b-482e-b8ff-9af57f212b5c.png"),
      path.join(JUDGES, "_pre-recenter-backup", "steven-he.jpg"),
      path.join(JUDGES, "steven-he.jpg"),
    ]),
    // Hair was still clipping — pull back hard; hair starts ~0.28 in tall source
    faceX: 0.5,
    faceY: 0.48,
    faceYOut: 0.4,
    zoom: 1.12,
    hairY: 0.28,
  },
  {
    key: "aliceHo",
    out: "alice-ho-final.jpg",
    src: resolve([
      P("image__1_-f2bf1013-998d-4b64-98a9-23bc96f5f235.png"),
      path.join(JUDGES, "_pre-recenter-backup", "alice-ho.jpg"),
    ]),
    // 0.42→right-heavy, 0.70→left-heavy; true center ~0.52
    faceX: 0.52,
    faceY: 0.34,
    faceYOut: 0.34,
    zoom: 1.55,
    hairY: 0.12,
  },
  {
    key: "idhantRanjan",
    out: "idhant-ranjan-final.jpg",
    src: resolve([
      P("image-cde83b54-31a1-44be-8c78-49cf678056fd.png"),
      path.join(JUDGES, "_pre-recenter-backup", "idhant-ranjan.jpg"),
    ]),
    // Slight pullback for cap headroom; keep center
    faceX: 0.5,
    faceY: 0.42,
    faceYOut: 0.36,
    zoom: 1.0,
    hairY: 0.06,
  },
  // C) Owen — midway v5/v6 face scale to match Roselynne/Jack; centered
  {
    key: "owenChristy",
    out: "owen-christy-final.jpg",
    src: resolve([
      P("image-8f3d7672-3c7d-470e-a065-00f153d27a33.png"),
      path.join(JUDGES, "_pre-recenter-backup", "owen-christy.jpg"),
    ]),
    faceX: 0.56,
    faceY: 0.44,
    faceYOut: 0.36,
    zoom: 1.12,
    hairY: 0.16,
  },
];

for (const job of JOBS) {
  if (!job.src) throw new Error(`MISSING source for ${job.out}`);
  const out = path.join(JUDGES, job.out);
  const info = await faceCover(job.src, out, job);
  console.log("WROTE", job.out, statSync(out).size, { ...info, src: path.basename(job.src) });
}

const sp = path.join(ROOT, "lib", "site-photos.ts");
let t = readFileSync(sp, "utf8");
for (const job of JOBS) {
  const target = `${job.key}: "/images/green-dream/judges/${job.out}"`;
  const re = new RegExp(`${job.key}:\\s*"[^"]+"`);
  if (re.test(t) && t.includes(target)) {
    console.log("site-photos already", job.out);
    continue;
  }
  const next = t.replace(re, target);
  if (next === t) throw new Error(`site-photos ${job.key} not updated`);
  t = next;
}
writeFileSync(sp, t);
console.log("UPDATED site-photos → *-final.jpg for", JOBS.map((j) => j.key).join(", "));

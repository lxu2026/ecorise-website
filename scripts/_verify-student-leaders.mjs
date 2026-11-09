import sharp from "sharp";
import { readFileSync, existsSync, statSync } from "fs";
import path from "path";

async function headroom(f) {
  const { data, info } = await sharp(f)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const ch = info.channels;
  let hairY = -1;
  for (let y = 0; y < Math.floor(h * 0.5); y++) {
    let dark = 0;
    let bright = 0;
    const n = Math.floor(w * 0.4);
    for (let x = Math.floor(w * 0.3); x < Math.floor(w * 0.7); x++) {
      const i = (y * w + x) * ch;
      const luma = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (luma < 55) dark++;
      else if (luma > 140) bright++;
    }
    if (dark / n > 0.45 && bright / n < 0.15) {
      hairY = y;
      break;
    }
  }
  let eyeY = -1;
  for (let y = Math.max(0, hairY); y < h; y++) {
    let skin = 0;
    const n = Math.floor(w * 0.4);
    for (let x = Math.floor(w * 0.3); x < Math.floor(w * 0.7); x++) {
      const i = (y * w + x) * ch;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r > 100 && g > 70 && b > 50 && r > b && r - b > 15) skin++;
    }
    if (skin / n > 0.25) {
      eyeY = y;
      break;
    }
  }
  console.log(
    path.basename(f),
    "hairY%",
    hairY < 0 ? "?" : (hairY / h).toFixed(3),
    "skinY%",
    eyeY < 0 ? "?" : (eyeY / h).toFixed(3),
  );
}

for (const f of [
  "public/images/green-dream/judges/steven-he-final.jpg",
  "public/images/green-dream/judges/steven-he-v5.jpg",
  "public/images/green-dream/judges/steven-he-v6.jpg",
  "public/images/green-dream/judges/steven-he-v4.jpg",
]) {
  await headroom(f);
}

const sp = readFileSync("lib/site-photos.ts", "utf8");
console.log("--- site-photos ---");
for (const k of ["allenXu", "stevenHe", "aliceHo"]) {
  const m = sp.match(new RegExp(`${k}:\\s*"([^"]+)"`));
  const rel = m?.[1];
  const abs = path.join("public", rel.replace(/^\//, ""));
  console.log(k, rel, "exists", existsSync(abs), "bytes", existsSync(abs) ? statSync(abs).size : "-");
}

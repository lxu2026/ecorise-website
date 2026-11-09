import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const OUT =
  "C:\\ecorise-website\\public\\images\\green-dream\\judges\\_preview";

fs.mkdirSync(OUT, { recursive: true });

// Clear prior previews
for (const f of fs.readdirSync(OUT)) {
  fs.unlinkSync(path.join(OUT, f));
}

const names = fs.readdirSync(ASSETS);
const picks = [];
for (const name of names) {
  if (!/\.(jpe?g|png|webp)$/i.test(name)) continue;
  const full = path.join(ASSETS, name);
  const st = fs.statSync(full);
  // Local CDT window when daliana was processed: Aug 7 2026 ~12:35–12:50
  const local = st.mtime;
  if (local.getFullYear() !== 2026 || local.getMonth() !== 7 || local.getDate() !== 7)
    continue;
  const mins = local.getHours() * 60 + local.getMinutes();
  if (mins < 12 * 60 + 30 || mins > 12 * 60 + 55) continue;
  if (st.size < 100000) continue;
  let m;
  try {
    m = await sharp(full).metadata();
  } catch {
    continue;
  }
  if ((m.width || 0) < 500) continue;
  picks.push({
    full,
    name,
    size: st.size,
    w: m.width,
    h: m.height,
    t: local.toString(),
  });
}
picks.sort((a, b) => b.size - a.size);
console.log("picks", picks.length);

let i = 0;
for (const p of picks.slice(0, 12)) {
  i += 1;
  const dest = path.join(OUT, `cand-${i}-${p.w}x${p.h}.jpg`);
  await sharp(p.full)
    .rotate()
    .resize(480, 600, { fit: "inside" })
    .jpeg({ quality: 85 })
    .toFile(dest);
  fs.writeFileSync(
    path.join(OUT, `cand-${i}.txt`),
    `${p.full}\n${p.w}x${p.h} ${p.size}\n${p.name}\n`,
  );
  console.log(i, `${p.w}x${p.h}`, p.size, p.name.slice(0, 120));
}

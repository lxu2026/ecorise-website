import sharp from "sharp";
import path from "node:path";

const input = path.resolve("public/images/ecorise-logo.jpg");
const output = path.resolve("public/images/ecorise-logo.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const visited = new Uint8Array(width * height);
const queue = [];

const idx = (x, y) => (y * width + x) * 4;
const pixelIndex = (x, y) => y * width + x;

const isBackground = (i) => {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  return r > 200 && g > 195 && b > 175;
};

for (let x = 0; x < width; x++) {
  queue.push([x, 0], [x, height - 1]);
}
for (let y = 0; y < height; y++) {
  queue.push([0, y], [width - 1, y]);
}

while (queue.length > 0) {
  const [x, y] = queue.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;

  const p = pixelIndex(x, y);
  if (visited[p]) continue;

  const i = idx(x, y);
  if (!isBackground(i)) continue;

  visited[p] = 1;
  data[i + 3] = 0;
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Saved ${output}`);

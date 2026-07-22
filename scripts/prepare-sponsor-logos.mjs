import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const assetsDir =
  "C:/Users/User/.cursor/projects/c-ecorise-website/assets";

/** Standard canvas for wide horizontal logos in the in-kind grid. */
const WIDE_LOGO_CANVAS = { width: 400, height: 160 };

const jobs = [
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Chicago_White_Sox-b18780bb-e0fd-4c30-85fe-759dc943a56e.png",
    ),
    output: path.resolve(root, "public/images/sponsors/white-sox.png"),
    isBackground: (r, g, b) => r < 35 && g < 35 && b < 35,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Andy_s-Frozen-Custard_Logo_O-4b6e4a8d-ac93-4542-8a0f-d568d1ac182b.png",
    ),
    output: path.resolve(root, "public/images/sponsors/andys-frozen-custard.png"),
    // Source already has transparency; black outlines and the top half of
    // "Frozen Custard" are logo black — edge flood-fill would erase them.
    skipBackgroundRemoval: true,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_image-1e1a7ae9-e2df-46ec-a261-3b7f1d4681a9.png",
    ),
    output: path.resolve(root, "public/images/sponsors/insomnia-cookies.png"),
    skipBackgroundRemoval: true,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_image-527fba26-e5aa-4d4e-9c1e-c9a67fbe1d97.png",
    ),
    output: path.resolve(root, "public/images/sponsors/lush.png"),
    isBackground: (r, g, b) => r > 240 && g > 240 && b > 240,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_image-cd15c531-0b31-4eef-8561-8b6bd53ce918.png",
    ),
    output: path.resolve(root, "public/images/sponsors/red-mango.png"),
    isBackground: (r, g, b) => r < 35 && g < 35 && b < 35,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_image-cd1e5ad4-8591-4ec7-8b87-423b535fb8dd.png",
    ),
    output: path.resolve(root, "public/images/sponsors/egg-harbor-cafe.png"),
    skipBackgroundRemoval: true,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_image-56b3d0de-f4b9-4576-a78f-e6d81629aa0c.png",
    ),
    output: path.resolve(root, "public/images/sponsors/45-degree.png"),
    isBackground: (r, g, b) => r > 240 && g > 240 && b > 240,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Sweet_General_1_2-3c3b17db-007e-4db6-a640-ae8e4deefe5b.png",
    ),
    output: path.resolve(root, "public/images/sponsors/sweet-general.png"),
    isBackground: (r, g, b) => r > 240 && g > 240 && b > 240,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-3b21a44a-18fd-43ec-9881-2cc45c9430f7.png",
    ),
    output: path.resolve(root, "public/images/sponsors/chipotle.png"),
    isBackground: (r, g, b) => r < 35 && g < 35 && b < 35,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
  {
    input: path.join(
      assetsDir,
      "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Paisans-Logo__8_-9e931c65-56dd-4f0c-b2eb-e2049700cc5d.png",
    ),
    output: path.resolve(root, "public/images/sponsors/paisans.png"),
    isBackground: (r, g, b) => r < 35 && g < 35 && b < 35,
    normalizeCanvas: WIDE_LOGO_CANVAS,
  },
];

function removeEdgeBackground(data, width, height, isBackground) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const idx = (x, y) => (y * width + x) * 4;
  const pixelIndex = (x, y) => y * width + x;

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
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (!isBackground(r, g, b)) continue;

    visited[p] = 1;
    data[i + 3] = 0;
    queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
}

/** Drop semi-transparent dark halos left from prior exports or compression. */
function removeDarkFringe(data) {
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha === 0 || alpha === 255) continue;

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (alpha < 16 || (r < 80 && g < 80 && b < 80)) {
      data[i + 3] = 0;
    }
  }
}

async function processLogo({
  input,
  output,
  isBackground,
  normalizeCanvas,
  skipBackgroundRemoval = false,
}) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  if (!skipBackgroundRemoval) {
    removeEdgeBackground(data, width, height, isBackground);
  }
  removeDarkFringe(data);

  let pipeline = sharp(data, {
    raw: { width, height, channels: 4 },
  }).trim({ threshold: 10 });

  if (normalizeCanvas) {
    pipeline = pipeline.resize(normalizeCanvas.width, normalizeCanvas.height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }

  await pipeline.png({ compressionLevel: 9 }).toFile(output);

  const meta = await sharp(output).metadata();
  console.log(`Saved ${path.relative(root, output)} (${meta.width}x${meta.height})`);
}

const only = process.argv.slice(2).map((arg) => arg.toLowerCase());
const selectedJobs =
  only.length === 0
    ? jobs
    : jobs.filter((job) =>
        only.some((token) => path.basename(job.output).includes(token)),
      );

if (selectedJobs.length === 0) {
  console.error(`No jobs matched: ${only.join(", ")}`);
  process.exit(1);
}

for (const job of selectedJobs) {
  await processLogo(job);
}

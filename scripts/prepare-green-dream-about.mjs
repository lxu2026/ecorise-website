import path from "path";
import sharp from "sharp";
import { mkdir } from "fs/promises";

const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream";
const SRC =
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Untitled_design-ca3c053c-4891-4a79-b851-939f38f61da7.png";

/** Upright awards-table photo — EXIF orient only, never deskew/rotateAngle. */
async function writeUpright(outName) {
  const out = path.join(PUBLIC, outName);
  await mkdir(path.dirname(out), { recursive: true });

  await sharp(path.join(ASSETS, SRC))
    .rotate() // EXIF orientation only
    .resize(1600, 900, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.5, m1: 0.35, m2: 2, x1: 2, y2: 10, y3: 20 })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(
    `  ${outName} → ${meta.width}×${meta.height} (orientation=${meta.orientation ?? "none"})`,
  );
}

console.log("Preparing upright Green Dream about-awards…\n");
await writeUpright("about-awards-upright.jpg");
await writeUpright("about-awards.jpg");
console.log("\nDone.");

import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const OUT = "C:\\ecorise-website\\public\\images\\summer-camp\\week-5";

const week5Photos = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC04857-3fa2bcbc-3746-4fea-90e2-0669adedb794.png",
    out: "hero-guest-speaker.jpg",
    width: 1800,
    height: 1200,
    position: "centre",
  },
  {
    // Prefer full-res camera JPEG when available (Cursor chat assets are downscaled).
    input: "C:\\Users\\User\\Downloads\\IMG_4747.JPG",
    out: "workshop-1.jpg",
    aspect: 3 / 2,
    width: 2100,
    height: 1400,
    position: "centre",
  },
  {
    input: "C:\\Users\\User\\Downloads\\IMG_4815.JPG",
    out: "workshop-2.jpg",
    aspect: 3 / 2,
    width: 1600,
    height: 1067,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC04835-7c68ff48-9604-4927-8bae-cfb78a88e4b1.png",
    out: "workshop-3.jpg",
    width: 1200,
    height: 900,
    position: "centre",
  },
];

console.log("Preparing Summer Camp week 5 photos…\n");

for (const photo of week5Photos) {
  await processPhoto({
    src: photo.src,
    input: photo.input,
    out: path.join(OUT, photo.out),
    aspect: photo.aspect,
    width: photo.width,
    height: photo.height,
    position: photo.position,
  });
}

console.log("\nDone.");

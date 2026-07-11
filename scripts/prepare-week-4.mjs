import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const OUT = "C:\\ecorise-website\\public\\images\\summer-camp\\week-4";

const week4Photos = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_IMG_4500-746ae039-3f40-450b-afb8-c0ec074af3f1.png",
    out: "hero-guest-speaker.jpg",
    width: 1800,
    height: 1200,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_DSC04457-002f0b0f-5f0d-47c5-ab1b-04052a0173a9.png",
    out: "workshop-1.jpg",
    width: 1200,
    height: 900,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_DSC04511-97b3217c-b144-4b76-83e9-efc519113cd2.png",
    out: "workshop-2.jpg",
    width: 1200,
    height: 900,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_DSC04505-93beaffc-494a-47f2-bc14-e939a54da69c.png",
    out: "workshop-3.jpg",
    width: 1200,
    height: 900,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_DSC04361-efe9446b-8cc9-4a21-a8de-c6d11d1384eb.png",
    out: "workshop-collaboration.jpg",
    width: 1200,
    height: 900,
    position: "centre",
  },
];

console.log("Preparing Summer Camp week 4 photos…\n");

for (const photo of week4Photos) {
  await processPhoto({
    src: photo.src,
    out: path.join(OUT, photo.out),
    width: photo.width,
    height: photo.height,
    position: photo.position,
  });
}

console.log("\nDone.");

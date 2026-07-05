import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const OUT = "C:\\ecorise-website\\public\\images\\summer-camp\\hero";

const heroTiles = [
  {
    out: "group-at-table.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_IMG_3855-d4a9f23b-1451-4b7f-a406-3a2106879646.png",
    aspect: 0.7 / 0.42,
    width: 900,
    height: 540,
    position: "centre",
  },
  {
    out: "table-session.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Copy_of_ecorisemet2-39-f38c9004-a356-4830-b0ba-510fda96e702.png",
    aspect: 0.42 / 0.32,
    width: 560,
    height: 427,
    position: "centre",
  },
  {
    out: "students-celebration.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Copy_of_ecorisemet2-38-d7515142-3ea5-422a-b388-0663c7f6d69f.png",
    aspect: 0.48 / 0.38,
    width: 640,
    height: 507,
    position: "centre",
  },
  {
    out: "workshop-activity.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Copy_of_IMG_2070-a7a4cfab-3f28-44d2-85db-ce2d5e731115.png",
    aspect: 0.52 / 0.36,
    width: 640,
    height: 444,
    position: "centre",
  },
];

console.log("Preparing Summer Camp hero collage tiles…\n");

for (const tile of heroTiles) {
  await processPhoto({
    src: tile.src,
    out: path.join(OUT, tile.out),
    aspect: tile.aspect,
    width: tile.width,
    height: tile.height,
    position: tile.position,
  });
}

console.log("\nDone.");

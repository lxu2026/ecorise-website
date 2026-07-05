import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const OUT = "C:\\ecorise-website\\public\\images\\summer-camp\\hero";

/** Tile aspects match threePhotoHeroCollageFrames in lib/hero-collage-layout.ts */
const heroTiles = [
  {
    out: "group-at-table.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_IMG_3855-057029f1-e568-4852-9906-b3e2f969f568.png",
    aspect: 0.62 / 0.48,
    position: "centre",
  },
  {
    out: "table-session.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Copy_of_ecorisemet2-39-28e3a891-b52c-4fae-b936-2497bb92f3dd.png",
    aspect: 0.48 / 0.36,
    position: "centre",
  },
  {
    out: "workshop-activity.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f5ec9a3fcc7ebeaf4b38d6ddf744336b_images_Copy_of_IMG_2070-a5d11efa-2d2a-4884-8f44-77e87b70fa02.png",
    aspect: 0.58 / 0.44,
    position: "centre",
  },
];

console.log("Preparing Summer Camp hero collage tiles…\n");

for (const tile of heroTiles) {
  await processPhoto({
    ...tile,
    out: path.join(OUT, tile.out),
  });
}

console.log("\nDone.");

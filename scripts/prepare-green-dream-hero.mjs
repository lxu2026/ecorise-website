import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream";

/** Tile aspects match GreenDreamHeroCollage frame sizes (width / height). */
const heroTiles = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3860-293092f5-6514-429d-928d-9072ea8ea7fd.png",
    out: "collaborative-workshop.jpg",
    aspect: 0.62 / 0.48,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4093-75875a29-11a3-48ff-a8f6-b22c4ca1b722.png",
    out: "student-presentation.jpg",
    aspect: 0.48 / 0.36,
    position: "centre",
  },
];

console.log("Preparing Green Dream Challenge hero collage tiles…\n");

for (const tile of heroTiles) {
  await processPhoto({
    ...tile,
    out: path.join(PUBLIC, tile.out),
  });
}

console.log("\nDone.");

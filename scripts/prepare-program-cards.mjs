import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images";
const OUT = path.join(PUBLIC, "home", "programs");
const aspect = 3 / 4;
/** 2× retina for ~450px-wide cards in the 3-column grid */
const CARD_WIDTH = 900;
const CARD_HEIGHT = 1200;

/** Cover crop (default). Brightness tuned so all three cards match (~145 avg luminance). */
const cards = [
  {
    out: "summer-camp-instructor-microphone.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4118-07dca517-5261-494c-ac90-cd7ed705999d.png",
    position: "centre",
    brightness: 1.15,
  },
  {
    out: "green-dream-tote-decorating.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_ecorise3-15-4697320e-d246-486b-b16e-733556f620cf.png",
    position: "centre",
    brightness: 1.05,
  },
  {
    out: "office-hours-study-table.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4242__1_-cc62c789-fdb6-41d2-9c24-fb5aff22a97e.png",
    position: "centre",
    brightness: 0.73,
  },
];

for (const card of cards) {
  await processPhoto({
    ...card,
    aspect,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    out: path.join(OUT, card.out),
    rotate: false,
  });
}

console.log("Program card images ready.");

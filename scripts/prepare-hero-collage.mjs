import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const OUT = "C:\\ecorise-website\\public\\images\\home\\hero";

/**
 * Each entry matches its collage tile shape and framing.
 * aspect = width / height for that tile's frame.
 */
const GROUP_PHOTO_SRC =
  "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3819-8243c914-05ec-4d45-8a46-1f137fd24b6e.png";

const heroTiles = [
  {
    out: "group-photo.jpg",
    src: GROUP_PHOTO_SRC,
    aspect: 0.62 / 0.46,
    position: "north",
  },
  {
    out: "tote-bag-showcase.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4175-d4ef742d-3f8f-4cc8-9347-47c8a2e43ebe.png",
    aspect: 0.4 / 0.28,
    position: "centre",
    normalize: true,
  },
  {
    out: "decorating-tote.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4216-82138f1e-376b-4150-9ab2-7f136d3cfd40.png",
    aspect: 0.44 / 0.3,
    position: "centre",
  },
  {
    out: "student-engagement.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4164-40dd5a03-1416-4705-94c5-e620e0159688.png",
    aspect: 0.34 / 0.24,
    position: "centre",
  },
  {
    out: "team-celebration.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4230-53e597d8-d29c-43e8-b5d4-fda434053851.png",
    aspect: 0.36 / 0.26,
    position: "centre",
  },
  {
    out: "guest-speaker.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4006-c289baac-b4e9-4897-91cc-831f89fccca1.png",
    aspect: 0.38 / 0.24,
    position: "centre",
  },
  {
    out: "camp-friends.jpg",
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4235-a9647e4f-31bc-4861-b810-3451840ced30.png",
    aspect: 0.34 / 0.22,
    position: "centre",
  },
];

console.log("Preparing hero collage tiles…\n");

const qualityReport = [];

for (const tile of heroTiles) {
  const result = await processPhoto({
    ...tile,
    out: path.join(OUT, tile.out),
  });
  qualityReport.push({ ...tile, ...result });
}

console.log("\nSource resolution report:");
for (const row of qualityReport) {
  const warn = row.srcW < 1600 ? " ⚠ low-res source" : "";
  console.log(`  ${row.out}: ${row.srcW}×${row.srcH} → ${row.outW}×${row.outH}${warn}`);
}

console.log("\nDone.");

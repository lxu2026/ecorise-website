import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream\\highlights";
const ASSETS = "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";

/** Remaining 6 cells for Green Dream 2026 Highlights 4×4 gallery */
const photos = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_IMG_1787-8f436940-177c-4001-a6d7-0c8853567812.png",
    out: "highlight-11-sponsor-board.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-46-5f4f7493-4907-41db-8288-bea28b50bef5.png",
    out: "highlight-12-medal-ceremony.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC03986-e4d7b77f-9ea0-487c-9d1c-87228d3c7d83.png",
    out: "highlight-13-ghg-graphs.jpg",
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_5045-262cab58-32f7-458e-a4f4-c8dff4d0dd64.png",
    out: "highlight-14-farmer-packaging.jpg",
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC03977-d073e35d-585b-4399-83a8-d45139c945ca.png",
    out: "highlight-15-stop-the-litter.jpg",
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_5016-7de97764-96d8-4413-b9fb-559f43b033e7.png",
    out: "highlight-16-thumbs-up.jpg",
    position: "centre",
  },
];

console.log("Preparing Green Dream highlight 11–16…\n");

for (const photo of photos) {
  await processPhoto({
    ...photo,
    out: path.join(PUBLIC, photo.out),
    aspect: 1,
    width: 800,
    height: 800,
  });
}

console.log("\nDone.");

import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream\\winners";

/**
 * Cover-crop winner/finalist/rising-star photos to fill card wells
 * (no letterbox). Positions keep groups centered so object-cover UI
 * clips empty wall before people when possible.
 */
const photos = [
  // 1st — featured 4:3
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-51-b51a7555-1881-44f8-bc6a-b97dc2390a9b.png",
    out: "1st-purely.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    position: "centre",
  },
  // Runner-ups 2–5 — 4:5 cards
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-50-e3795485-b4f6-455e-9baf-20f73d3226b5.png",
    out: "2nd-aqua-filter.jpg",
    aspect: 4 / 5,
    width: 1120,
    height: 1400,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-49-199713d2-b87d-4a73-ba4c-3d4de9556b58.png",
    out: "3rd-compost-connect.jpg",
    aspect: 4 / 5,
    width: 1120,
    height: 1400,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-48-123bc576-9652-4a03-bc93-aa7eef63cdf3.png",
    out: "4th-disposing-batteries.jpg",
    aspect: 4 / 5,
    width: 1120,
    height: 1400,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-11__1_-4a3e28e0-3ec6-4d36-9e27-45ccf67ed5c9.png",
    out: "5th-auto-unplug.jpg",
    aspect: 4 / 5,
    width: 1120,
    height: 1400,
    position: "north",
  },
  // Finalists 6–10 — 4:3 (wider well keeps full groups under object-cover)
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-47-c25b3318-5e6c-4b4e-8371-fc4774eef4da.png",
    out: "6th-buzbomb.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    // Mild vertical bias only — keep full group width
    position: { x: 0.5, y: 0.58 },
    zoom: 1.06,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-45-02c343e7-cdfc-4ad7-98b9-33f7fa934ef6.png",
    out: "7th-reducing-litter.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    position: { x: 0.42, y: 0.58 },
    zoom: 1.05,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-44-f40f80c3-fc18-4f20-b5d3-6166bc89d577.png",
    out: "8th-greenlens.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    // Wide 5-person line — no horizontal zoom, light south bias
    position: { x: 0.5, y: 0.6 },
    zoom: 1.04,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-43-d7769ad6-43a5-4776-9c4e-4323a111b7bf.png",
    out: "9th-blue-rover.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    position: { x: 0.5, y: 0.58 },
    zoom: 1.05,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC04147-5f8186d8-2147-4ed6-9bd8-e91c8e4aafbb.png",
    out: "10th-littering.jpg",
    aspect: 4 / 3,
    width: 1400,
    height: 1050,
    // Mild west bias — keep left person without overshooting into empty left wall
    position: { x: 0.38, y: 0.55 },
    zoom: 1.03,
  },
  // Rising Stars — square thumbs
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-54-2a529c15-cb3e-404e-a51f-f83e9e9bfb66.png",
    out: "rising-star-riya-bhanji.jpg",
    aspect: 1,
    width: 1400,
    height: 1400,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_greendream-53-f4fbab9d-f8be-4070-a7c6-88b1bc0fb1a0.png",
    out: "rising-star-richie-parab.jpg",
    aspect: 1,
    width: 1400,
    height: 1400,
    position: "north",
  },
];

console.log("Preparing Green Dream winner photos (cover, filled wells)…\n");

for (const photo of photos) {
  await processPhoto({
    src: photo.src,
    out: path.join(PUBLIC, photo.out),
    aspect: photo.aspect,
    width: photo.width,
    height: photo.height,
    fit: "cover",
    position: photo.position,
    zoom: photo.zoom ?? 1,
  });
}

console.log("\nDone.");

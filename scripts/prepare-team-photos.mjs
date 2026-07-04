/**
 * Core team photo — Josh McConkey: square crop, reduced exposure (0.9×), web export.
 *
 * Run: node scripts/prepare-team-photos.mjs
 */
import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\team";

const JOSH = {
  src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4195-6d2e6448-7509-4540-8bcf-e4dc41be1475.png",
  out: path.join(PUBLIC, "josh-mcconkey-hoodie-v2.jpg"),
  aspect: 1,
  width: 800,
  height: 800,
  position: "north",
  brightness: 0.9,
};

console.log("Processing Josh McConkey team photo…");
await processPhoto(JOSH);
console.log("Done.");

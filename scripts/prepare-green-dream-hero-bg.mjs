import path from "path";
import { processPhoto, ASSETS } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream";

console.log("Preparing Green Dream hero background…\n");

await processPhoto({
  input: path.join(ASSETS, "IMG_1774-hires.jpg"),
  out: path.join(PUBLIC, "hero-bg.jpg"),
  width: 2400,
  height: 1600,
  position: "centre",
});

console.log("\nDone.");

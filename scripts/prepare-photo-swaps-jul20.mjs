import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const DOWNLOADS = "C:\\Users\\User\\Downloads";
const PUBLIC = "C:\\ecorise-website\\public\\images";

const jobs = [
  {
    label: "Mission carousel — advocacy workshop",
    input: path.join(DOWNLOADS, "IMG_4703.JPG"),
    out: path.join(PUBLIC, "mission", "advocacy-workshop.jpg"),
    aspect: 16 / 10,
    width: 1200,
    height: 750,
    position: "centre",
  },
  {
    label: "Hero collage — laptop boys",
    input: path.join(DOWNLOADS, "IMG_4614.JPG"),
    out: path.join(PUBLIC, "home", "hero", "hero-grid-21.jpg"),
    aspect: 1,
    width: 800,
    height: 800,
    position: "centre",
  },
  {
    label: "Hero collage — striped shirt table",
    input: path.join(DOWNLOADS, "DSC04962.JPG"),
    out: path.join(PUBLIC, "home", "hero", "hero-grid-22.jpg"),
    aspect: 1,
    width: 800,
    height: 800,
    position: "centre",
  },
  {
    label: "Summer Camp program card — table collab",
    input: path.join(DOWNLOADS, "DSC04936.JPG"),
    out: path.join(PUBLIC, "home", "programs", "summer-camp-table-collab.jpg"),
    aspect: 3 / 4,
    width: 900,
    height: 1200,
    position: "centre",
    brightness: 1.1,
    rotate: false,
  },
];

console.log("Processing Jul 20 photo swaps (Downloads full-res)…\n");

for (const job of jobs) {
  console.log(job.label);
  await processPhoto({
    input: job.input,
    out: job.out,
    aspect: job.aspect,
    width: job.width,
    height: job.height,
    position: job.position,
    brightness: job.brightness,
    rotate: job.rotate,
  });
}

console.log("\nDone.");

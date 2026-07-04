import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";
const OUT = "C:\\ecorise-website\\public\\images\\home\\hero";

/** Session 1 picks for homepage hero collage */
const images = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3947-da65f1be-41e1-462e-8812-65a06fdea394.png",
    out: "group-photo.jpg",
    width: 900,
    height: 620,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3943-a976eba0-2258-41ab-bccc-d2f122c32b28.png",
    out: "presentation.jpg",
    width: 560,
    height: 420,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3927-5101070d-6a53-40ef-934e-d962e2cbdf8e.png",
    out: "workshop.jpg",
    width: 560,
    height: 420,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3799-7e3890dd-32e9-4719-a6ad-d6153fac50fa.png",
    out: "networking-bingo.jpg",
    width: 480,
    height: 360,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC03988-f6d0f4f8-38f9-43f1-90df-6e5e67a329d6.png",
    out: "mentorship.jpg",
    width: 480,
    height: 360,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3936-1249cb74-1966-4c37-906f-a655dc01f9ab.png",
    out: "hands-on.jpg",
    width: 480,
    height: 360,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3928-4b36742d-9bf6-4df7-9ead-ff1f2aa55d9a.png",
    out: "camp-mentor.jpg",
    width: 480,
    height: 360,
    position: "centre",
  },
];

await mkdir(OUT, { recursive: true });

for (const image of images) {
  const input = path.join(ASSETS, image.src);
  await sharp(input)
    .rotate()
    .resize(image.width, image.height, {
      fit: "cover",
      position: image.position,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, image.out));

  console.log(`Wrote ${image.out}`);
}

console.log("Done.");

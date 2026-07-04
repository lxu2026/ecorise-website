import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const ASSETS =
  "C:\\Users\\User\\.cursor\\projects\\c-ecorise-website\\assets";

async function processImage({ src, out, width, height, position = "centre" }) {
  const input = path.join(ASSETS, src);
  await sharp(input)
    .rotate()
    .resize(width, height, { fit: "cover", position })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`Wrote ${out}`);
}

/** Summer Camp — Week 2 gallery */
const week2Out = "C:\\ecorise-website\\public\\images\\summer-camp\\week-2";
await mkdir(week2Out, { recursive: true });

const week2Images = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3995-90aa7e16-e369-4c71-82fc-c5f264c62b85.png",
    out: path.join(week2Out, "hero-microphone.jpg"),
    width: 1200,
    height: 800,
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4082-ef4ec732-e787-49bf-9120-ac885d4a6f78.png",
    out: path.join(week2Out, "workshop-1.jpg"),
    width: 800,
    height: 600,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4074-13ddafa7-a612-4550-ac98-58f7895c492a.png",
    out: path.join(week2Out, "workshop-2.jpg"),
    width: 800,
    height: 600,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4033-63154ac1-e26a-4934-a902-d1f45a20ae2d.png",
    out: path.join(week2Out, "workshop-3.jpg"),
    width: 800,
    height: 600,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4071-195d612a-ea07-4caa-80e3-d6ca6de7f3b4.png",
    out: path.join(week2Out, "workshop-4.jpg"),
    width: 800,
    height: 600,
  },
];

for (const image of week2Images) {
  await processImage(image);
}

/** Homepage hero — Session 2 highlights mixed with Session 1 anchor */
const heroOut = "C:\\ecorise-website\\public\\images\\home\\hero";
await mkdir(heroOut, { recursive: true });

const heroSession2 = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4096-10cc5391-d1b9-4ce4-b4a8-5c9ad97591df.png",
    out: path.join(heroOut, "student-presentation.jpg"),
    width: 560,
    height: 420,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4082-ef4ec732-e787-49bf-9120-ac885d4a6f78.png",
    out: path.join(heroOut, "compost-posters.jpg"),
    width: 560,
    height: 420,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4074-13ddafa7-a612-4550-ac98-58f7895c492a.png",
    out: path.join(heroOut, "sustainability-poster.jpg"),
    width: 480,
    height: 360,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4071-195d612a-ea07-4caa-80e3-d6ca6de7f3b4.png",
    out: path.join(heroOut, "save-turtles.jpg"),
    width: 480,
    height: 360,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4077-a94f2bf7-16f1-4ffa-97e4-a3cfcc0fc8a2.png",
    out: path.join(heroOut, "mentor-volunteer.jpg"),
    width: 480,
    height: 360,
  },
];

for (const image of heroSession2) {
  await processImage(image);
}

console.log("Session 2 photos ready.");

import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images\\green-dream\\highlights";

/** Square crops for Green Dream 2026 Highlights 4×4 gallery */
const photos = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_5324_Copy-7c7fbb37-058a-4f1d-9b9b-d6849db9d2eb.png",
    out: "highlight-01-winners-group.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_5102-94ad8701-3e79-4cc1-af76-693e4d62719e.png",
    out: "highlight-02-audience.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC04024-7aaf054f-4b7d-45ff-b86a-1b3c22447524.png",
    out: "highlight-03-student-presenting.jpg",
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC04053-d147271e-aa39-4ced-ac92-1da0adf23c4a.png",
    out: "highlight-04-who-is-affected.jpg",
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4856-b0f5b352-8065-4e6f-b1fc-090979612e4f.png",
    out: "highlight-05-prototype-pitch.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4909-fc635d4f-eb7c-452e-bf68-2060ddfe82c9.png",
    out: "highlight-06-judges-panel.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ecorise4-7-421456a7-81d0-42fa-9a06-8b8621644edc.png",
    out: "highlight-07-judges-table.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_Copy_of_IMG_1774-7d42db9f-602a-4d5f-8b58-7f08882d0b20.png",
    out: "highlight-08-banner-group.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_IMG_1795-831f5869-5da7-45a4-9c61-0927853051f3.png",
    out: "highlight-09-banner-duo.jpg",
    position: "centre",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_5133-bf5e9aca-31eb-4267-b9eb-1ca2a06c9bfe.png",
    out: "highlight-10-audience-medals.jpg",
    position: "centre",
  },
];

console.log("Preparing Green Dream highlight gallery photos…\n");

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

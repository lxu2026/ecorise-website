import path from "path";
import { processPhoto } from "./lib/process-photo.mjs";

const PUBLIC = "C:\\ecorise-website\\public\\images";

/** Hero collage — mixed sessions, exported at 2× retina */
const hero = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_ecorise3-28-ab0c91e8-90e1-4cea-a663-844aae6284ca.png",
    out: "group-photo.jpg",
    width: 1600,
    height: 1100,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4175-d4ef742d-3f8f-4cc8-9347-47c8a2e43ebe.png",
    out: "tote-bag-showcase.jpg",
    width: 1000,
    height: 750,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4173-2e8fbc3f-02ce-42d4-8660-6b8d014d69a0.png",
    out: "decorating-tote.jpg",
    width: 1000,
    height: 750,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4164-40dd5a03-1416-4705-94c5-e620e0159688.png",
    out: "student-engagement.jpg",
    width: 900,
    height: 680,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4230-53e597d8-d29c-43e8-b5d4-fda434053851.png",
    out: "team-celebration.jpg",
    width: 900,
    height: 680,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4006-c289baac-b4e9-4897-91cc-831f89fccca1.png",
    out: "guest-speaker.jpg",
    width: 900,
    height: 680,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4235-a9647e4f-31bc-4861-b810-3451840ced30.png",
    out: "camp-friends.jpg",
    width: 900,
    height: 680,
  },
];

/** Week 1 */
const week1 = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3819-8243c914-05ec-4d45-8a46-1f137fd24b6e.png",
    out: "group-photo.jpg",
    width: 1800,
    height: 1200,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3927-5101070d-6a53-40ef-934e-d962e2cbdf8e.png",
    out: "workshop-1.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3920-3d2ea210-9f73-4923-b3c0-fed1b251bf29.png",
    out: "workshop-2.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3936-1249cb74-1966-4c37-906f-a655dc01f9ab.png",
    out: "workshop-3.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_DSC03988-f6d0f4f8-38f9-43f1-90df-6e5e67a329d6.png",
    out: "workshop-4.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3807-7ee9fa83-9298-4aea-a43d-513d70814fa7.png",
    out: "hero-instructor.jpg",
    width: 1200,
    height: 900,
  },
];

/** Week 2 */
const week2 = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_3995-90aa7e16-e369-4c71-82fc-c5f264c62b85.png",
    out: "hero-microphone.jpg",
    width: 1800,
    height: 1200,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4082-ef4ec732-e787-49bf-9120-ac885d4a6f78.png",
    out: "workshop-1.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4074-13ddafa7-a612-4550-ac98-58f7895c492a.png",
    out: "workshop-2.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4033-63154ac1-e26a-4934-a902-d1f45a20ae2d.png",
    out: "workshop-3.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4071-195d612a-ea07-4caa-80e3-d6ca6de7f3b4.png",
    out: "workshop-4.jpg",
    width: 1200,
    height: 900,
  },
];

/** Week 3 + guest speaker */
const week3 = [
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4120-197d0ddd-11e1-43e0-87d5-81ea85f4808f.png",
    out: "hero-podium.jpg",
    width: 1800,
    height: 1200,
    position: "north",
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4175-d4ef742d-3f8f-4cc8-9347-47c8a2e43ebe.png",
    out: "workshop-1.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4232-b5bb7394-3df5-4c04-99f4-929dc71a2a42.png",
    out: "gallery-group.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4216-82138f1e-376b-4150-9ab2-7f136d3cfd40.png",
    out: "workshop-3.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4173-2e8fbc3f-02ce-42d4-8660-6b8d014d69a0.png",
    out: "workshop-4.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG_4122-1a26bb0d-196c-4be0-9a7d-7ee329a3a9ff.png",
    out: "guest-speaker-session.jpg",
    width: 1200,
    height: 900,
  },
  {
    src: "c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Copy_of_ecorise3-15-f682ec72-a10e-4c83-829b-ad273016b866.png",
    out: "guest-speaker-thanks.jpg",
    width: 1200,
    height: 900,
  },
];

async function runBatch(label, folder, images) {
  console.log(`\n${label}`);
  for (const image of images) {
    await processPhoto({
      ...image,
      out: path.join(PUBLIC, folder, image.out),
    });
  }
}

await runBatch("Homepage hero", "home/hero", hero);
await runBatch("Summer camp week 1", "summer-camp/week-1", week1);
await runBatch("Summer camp week 2", "summer-camp/week-2", week2);
await runBatch("Summer camp week 3", "summer-camp/week-3", week3);

console.log("\nReprocessing homepage program cards...");
await import("./prepare-program-cards.mjs");

console.log("\nAll photos reprocessed at high quality.");

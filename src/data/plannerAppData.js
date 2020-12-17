import homepagePlannerApp from "./../vector-images/planner-app-882x708.png";

import JSLight from "./../vector-images/js-logo-lght-gray.svg";
import darkThemeJSDark from "./../vector-images/dark-theme-js-dark.svg";

import HTMLLight from "./../vector-images/html-logo-lght-gray.svg";
import darkThemeHTMLDark from "./../vector-images/dark-theme-html-dark.svg";

import CSSLight from "./../vector-images/css-logo-lght-gray.svg";
import darkThemeCSSDark from "./../vector-images/dark-theme-css-dark.svg";

import plannerMain from "./../vector-images/planner-main-2746x1342.png";
import plannerAppAddAndSort from "./../vector-images/planner-app-add-and-sort-tasks.gif";
import plannerAppTaskDone from "./../vector-images/planner-app-task-done.gif";
import plannerAppResponsive from "./../vector-images/planner-app-responsive-design.gif";
import plannerAppMoreCodingProjects from "./../vector-images/planner-app-more-projects-1376x708.png";
import { PageNames } from "../names";

const plannerAppData = {
  componentName: PageNames.PLANNER_APP,
  title: "Planner App",
  description: "Responsive web application to plan, organize, and track tasks.",
  icons: [JSLight, HTMLLight, CSSLight],
  iconsDarkTheme: [darkThemeJSDark, darkThemeHTMLDark, darkThemeCSSDark],

  homepageImage: homepagePlannerApp,
  homepageImgAlt: "Planner app",

  buttonToApp: true,
  buttonToAppText: "Try Planner App",
  buttonToAppLink: "https://maretidris.github.io/planner-web-app/",

  mainImage: plannerMain,
  mainImageAlt: "Planner app",

  aboutProjectArray: [
    "2019 Mar - Jul (4 months)",
    [["Web", "https://maretidris.github.io/planner-web-app/"]],
    [["Clone the repo", "https://github.com/MaretIdris/planner-web-app"]],
    "Product designer, front-end JavaScript developer",
    "Planner app is my project and I created everything from scratch",
  ],

  endResultTitle: "End result",
  // ["Paragraph", Gif, "Gif alt text", "gif-id-for-modal"]
  endResultParagraphGifArray: [
    [
      "Add tasks and sort them by priority or deadline.",
      plannerAppAddAndSort,
      "Planner app adding and sorting gif",
      "planner-gif-one-modal",
    ],
    [
      "Mark task done and multiple ways to delete a task.",
      plannerAppTaskDone,
      "Planner app marking task done gif",
      "planner-gif-two-modal",
    ],
    [
      "Planner app is responsive and has multiple breakpoints to make the design to adapt the viewport size.",
      plannerAppResponsive,
      "Planner app responsive design gif",
      "planner-gif-three-modal",
    ],
  ],

  featuresTitle: "Features",
  featuresArray: [
    ["View today’s date ", "and current time"],
    [
      "Add a task ",
      '(by using the keyboard shortcut Enter or a "+ Add task" button)',
    ],
    [
      "Task highlighting: ",
      "When a task is added, it's background will be highlighted light gray. This helps to identify the added task from the rest of the tasks if more than one task is present.",
    ],
    [
      "Mark task is done: ",
      "If the user hovers over an empty checkbox, a checked icon will appear. This is to visually indicate that the task will be marked done if the checkbox is clicked.",
    ],
    ["Edit task ", "text by clicking on the task text"],
    ["Add a priority ", "to a task (P0, P1, or P2)"],
    ["Add a deadline ", "to a task"],
    ["Sort tasks ", "by priority or deadline"],
    [
      "Delete a task: ",
      "Click on the trash bin icon or remove all text inside of the task and click out of the textarea.",
    ],
    [
      "Mark task is undone: ",
      "If the user hovers over the checked checkbox, an arrow pointing left icon will appear. This is to visually indicate that the task will be marked undone and moved back to the left side of the screen if the checked checkbox is clicked.",
    ],
    [
      "Delete a task done: ",
      "Remove a task text and click out of the text area.",
    ],
  ],

  // Separate image for <MoreCodingProjects /> component.
  moreCodingProjectsImage: plannerAppMoreCodingProjects,
};

export default plannerAppData;

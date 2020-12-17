import androidLight from "./../vector-images/android-logo-lght-gray.svg";
import darkThemeAndroidDark from "./../vector-images/dark-theme-android-dark.svg";

import IOSLight from "./../vector-images/ios-logo-lght-gray.svg";
import darkThemeIOSDark from "./../vector-images/dark-theme-ios-dark.svg";

import homepageTruckX from "./../vector-images/truckx-708x708.png";
import truckXMain from "./../vector-images/truck-main-2746x1342.png";
import logbook from "./../vector-images/truckx-paper-logsheet-2x.png";
import iA from "./../vector-images/truckx-ia-2x.png";
import wireframe from "./../vector-images/truckx-wireframe-2x.png";
import interactionDesign from "./../vector-images/truckx-interaction-design.png";
import lowFiPrototype from "./../vector-images/truckx-low-fidelity-prototype-small.gif";
import timelog from "./../vector-images/truckx-timelog.png";
import loads from "./../vector-images/truckx-loads.png";
import oneLoad from "./../vector-images/truckx-loads-load.png";
import oneLoadFreight from "./../vector-images/truckx-load-freight.png";
import oneLoadSign from "./../vector-images/truckx-load-sign.png";
import highFiPrototype from "./../vector-images/truckx-high-fidelity-small.gif";
import { PageNames } from "../names";

const truckXData = {
  componentName: PageNames.TRUCKX,
  title: "TruckX",
  description: "Electronic logbook and trip planning app for truck drivers.",
  icons: [IOSLight, androidLight],
  iconsDarkTheme: [darkThemeIOSDark, darkThemeAndroidDark],
  homepageImage: homepageTruckX,
  homepageImgAlt: "TruckX image",

  // If I need a button on the header, then add those props:
  // buttonToApp: true,
  // buttonToAppText: "Try App",
  // buttonToAppLink: "https://en.wikipedia.org/wiki/Truck",

  mainImage: truckXMain,
  mainImageAlt: "TruckX",

  aboutProjectArray: [
    "2016 Dec - 2017 Feb (3 months)",
    [
      [
        "Android",
        "https://play.google.com/store/apps/details?id=com.truckx.app&hl=en_US&gl=US",
      ],
      [
        "iOS",
        "https://apps.apple.com/us/app/truckx-electronic-logbook/id1216209774",
      ],
    ],
    "22",
    "Product Designer, while at R3BL",
    "I was the only designer in this project, individually responsible for all of the designs",
  ],

  aboutTitle: "About TruckX",
  aboutArray: [
    "For this project, I worked directly with the CEO of a startup, to design a digital replacement for paper-based truck driver log books. My goal was to give the early stage startup the main user flows, along with the main body of design so they could start building a prototype.",
  ],

  endResultTitle: "End result",
  mobileDesign: true,

  featuresTitle: "Features",
  featuresArray: [
    [
      "Trips: ",
      "Add a trip, add a stop, manage a trip, view freight info, etc.",
    ],
    [
      "Timelogs: ",
      "View and set current timelog state, edit timelog form, and sign off the timelog at the end of each day of the trip.",
    ],
  ],

  userStoriesTitle: "User stories",
  userStoriesArray: [
    "Today, truck drivers use logbooks to record their service hours and data about their truck. Every time they start a new delivery they have to fill out basic information about their truck and relevant dates using this log book.",
    "The users of this app are truck drivers who would want to use an app instead of their paper log books. They have smartphones and are used to using apps. They want to make their driving experience simpler and remove the risk of damaging or losing their paper log book. They also are aware of OBD-II devices that can be used to gather telemetry data from their trucks (distance traveled, fuel consumption, etc) that can be used to provide data to this app.",
  ],

  logbookTitle: "Truck driver paper logbook sheet",
  logbookImage: logbook,
  logbookImgAlt: "Paper logbook sheet",
  logbookImageId: "truckx-logbook-modal",

  iATitle: "Information architecture",
  iAParagraphArray: [
    "I created this IA with the CEO to demonstrate the main structure and content of the app. This document was considered the main source of truth about what was going to be designed and built. I kept this diagram up to date through the design process with new information that needed to be added to the design.",
  ],
  iAImage: iA,
  iAImageAlt: "TruckX information architecture",
  iAImageId: "truckx-ia-modal",

  wireframesTitle: "Wireframes",
  wireframesParagraphArray: [
    "This paper wireframe user flow was created to give the developers an idea of what needs to be built, so they could have started planning the construction of the app ahead of time.",
  ],
  wireframesImage: wireframe,
  wireframeImageAlt: "TruckX wireframes",
  wireframesId: "truckx-wireframes-modal",

  interactionTitle: "Interaction design",
  interactionParagraphArray: [
    "I created this interaction flow with more details than wireframes to allow the engineering team to determine what it would take for them to build it. It includes notes about interactions of how components of the app behave when interacted with.",
  ],
  interactionImage: interactionDesign,
  interactionImageAlt: "TruckX interaction design",
  interactionId: "truckx-interaction-design-modal",

  lowFiTitle: "Low fidelity prototype",
  lowFiParagraph:
    "In order to test out the user flow before designing the high fidelity app, I created the low fidelity prototype to get user feedback.",
  lowFiImage: lowFiPrototype,
  lowFiImageAlt: "TruckX low fidelity prototype",
  lowFiId: "truckx-low-fi-prototype-modal",

  mobileGalleryTitle: "High fidelity mockups",
  mobileGalleryParagraph:
    "My goals for the visual design were to keep app looking simple and easy to modify and extend the design.",
  mobileGalleryImagesArray: [
    [timelog, "Timelogs"],
    [loads, "Loads"],
    [oneLoad, "Load"],
    [oneLoadFreight, "Freight info"],
    [oneLoadSign, "Sign a load"],
  ],
  mobileGalleryModalId: "truckx-mobile-gallery-modal",

  highFiTitle: "High fidelity prototype",
  highFiParagraph:
    "Using InVision I created a high fidelity prototype that was delivered to the engineering team with the mockups in order for them to build the app.",
  highFiImage: highFiPrototype,
  highFiImageAlt: "TruckX high fidelity prototype",
  highFiId: "truckx-hi-fi-prototype-modal",

  moreDesignProjectsTitle: "More design projects",
};

export default truckXData;

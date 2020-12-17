import androidLight from "./../vector-images/android-logo-lght-gray.svg";
import darkThemeAndroidDark from "./../vector-images/dark-theme-android-dark.svg";

import homepageUamp from "./../vector-images/uamp-708x708.png";
import uampMain from "./../vector-images/uamp-main-2746x1342.png";
import uampOldDesign from "./../vector-images/uamp-old-design.png";
import wireframe from "../vector-images/uamp-wireframe-2x.png";
import interactionDesign from "../vector-images/uamp-interaction-design.png";
import lowFiPrototype from "../vector-images/uamp-low-fidelity-prototype.gif";
import typography from "../vector-images/uamp-typography-2x.png";
import browseMusic from "./../vector-images/uamp-browse-music.png";
import myFavourites from "./../vector-images/uamp-my-favourites.png";
import fullScreenPlayer from "./../vector-images/uamp-full-screen-player.png";
import byArtist from "./../vector-images/uamp-by-artist.png";
import byAlbum from "./../vector-images/uamp-by-album.png";
import albumOpen from "./../vector-images/uamp-album-open.png";
import emptyState from "./../vector-images/uamp-empty-state.png";
import highFiPrototype from "../vector-images/uamp-prototype.gif";
import { PageNames } from "../names";

const uampData = {
  componentName: PageNames.UAMP,
  title: "Universal Android Music Player",
  description: "Sample music app for Android media developers by Google.",
  icons: [androidLight],
  iconsDarkTheme: [darkThemeAndroidDark],
  homepageImage: homepageUamp,

  // If I need a button on the header, then add those props:
  // buttonToApp: true,
  // buttonToAppText: "Try App",
  // buttonToAppLink: "https://en.wikipedia.org/wiki/Truck",

  mainImage: uampMain,
  mainImageAlt: "Universal Android Music Player",

  aboutProjectArray: [
    "2017 Nov - Dec (2 months)",
    [
      [
        "Android",
        "https://play.google.com/store/apps/details?id=com.truckx.app&hl=en_US&gl=US",
      ],
    ],
    "13",
    "Product Designer, contract work while at R3BL",
    "I was the only designer for the project and directly responsible for all of the designs. I redesigned the previous Universal Android Music Player (UAMP) and added new features like thumbs up/down, ability to browse by album, and view album.",
  ],

  aboutTitle: "About Universal Android Music Player (UAMP)",
  aboutArray: [
    "I worked with members of Google’s Android Developer Relations team to design a canonical sample media app, which is intended to serve as a starter project for developers wanting to create media experiences on Android.",
    "Developers can use different components from the sample app and customize them for their specific needs if needed.",
  ],

  endResultTitle: "End result",
  mobileDesign: true,

  featuresTitle: "Features",
  featuresArray: [
    ["Browse music: ", "by genre, by artist, by album, my favorites."],
    [
      "Full page music player ",
      "with features to thumb up the song (adds the song to favorites), thumb down the song, scrubber, pause/play the song, go forward/backward for 10 seconds, swipe from right to left to play the next song, swipe from left to right to play the previous song.",
    ],
    [
      "Bottom music player ",
      "with features to pause/play the song, view song name, artist name, and song image, swipe up on the music player to view the full music player.",
    ],
  ],

  userStoriesTitle: "User stories",
  userStoriesArray: [
    "UAMP only has one type of user: Android Media Developer. They are tasked with building an Android media app for work. They can build this app from scratch, but it would take a long time. They are looking for open source code components to reduce the development time of their music app.",
  ],

  requirementsTitle: "User stories",
  requirementsArray: [
    "The sample app had to include all the common features that a standard music app would have such as playlist management, media controls (play, pause etc), scrubber etc.",
    "The goal of the visual design was to build an elegant, easy to follow and visually appealing app using Google’s Material Design guidelines.",
  ],

  oldSiteTitle: "Old app design",
  oldSiteImage: uampOldDesign,
  oldSiteImageAlt: "Old app design",
  oldSiteId: "uamp-old-app-design-modal",

  wireframesTitle: "Wireframes",
  wireframesParagraphArray: [
    "The team used 3” x 5” sticky notes to create multiple versions of screen layouts and then chose the most suitable options to create user flows. Sticky notes are great because they are small and it’s fast to generate many iterations. Also, they stick on the wall for everyone to see, which is great for fast iterative collaboration.",
  ],
  wireframesImage: wireframe,
  wireframeImageAlt: "UAMP wireframes",
  wireframesId: "uamp-wireframes-modal",

  interactionTitle: "Interaction design",
  interactionParagraphArray: [
    "I created this interaction flow to allow the engineering team to determine what it would take for them to build it. It includes notes about interactions of how components of the app behave when interacted with.",
  ],
  interactionImage: interactionDesign,
  interactionImageAlt: "UAMP interaction design",
  interactionId: "uamp-interaction-design-modal",

  lowFiTitle: "Low fidelity prototype",
  lowFiParagraph:
    "A low fidelity prototype was created in order to test that the user flow felt right and made sense. It was delivered to the engineers with the interaction flow diagram.",
  lowFiImage: lowFiPrototype,
  lowFiImageAlt: "UAMP low fidelity prototype",
  lowFiId: "uamp-low-fi-prototype-modal",

  typographyTitle: "Typography & color theme",
  typographyParagraphArray: [
    "The goal for the visual design was to use Google’s Material Design guidelines but change them enough to give UAMP its own unique outstanding look and feel. We wanted to communicate that even though it’s a sample app, it doesn’t have to be just the common orange and white combination that media sample apps often use.",
  ],
  typographyImage: typography,
  typographyImageAlt: "Typography & color theme",
  typographyImageId: "uamp-typography-modal",

  mobileGalleryTitle: "High fidelity mockups",
  mobileGalleryParagraph:
    "The high fidelity mockup was delivered to the engineering team, so they could start implementation.",
  mobileGalleryImagesArray: [
    [browseMusic, "Browse music"],
    [myFavourites, "My favourites"],
    [fullScreenPlayer, "Full screen music player"],
    [byArtist, "Browse music by artist"],
    [byAlbum, "Browse music by album"],
    [albumOpen, "Album page"],
    [emptyState, "Empty state"],
  ],
  mobileGalleryModalId: "uamp-mobile-gallery-modal",

  highFiTitle: "High fidelity prototype",
  highFiParagraph:
    "High fidelity prototype was created in InVision and delivered with the mockups to the engineers. This was to facilitate the communication of most of the interactions to the engineering team.",
  highFiImage: highFiPrototype,
  highFiImageAlt: "UAMP high fidelity prototype",
  highFiId: "uamp-hi-fi-prototype-modal",

  moreDesignProjectsTitle: "More design projects",
};

export default uampData;

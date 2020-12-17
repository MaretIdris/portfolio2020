import webLight from "./../vector-images/web-logo-lght-gray.svg";
import darkThemeWebDark from "./../vector-images/dark-theme-web-dark.svg";

import homepageWWB from "./../vector-images/wwb-708x708.png";
import wwbMain from "./../vector-images/wwb-main-2746x1342.png";
import homePage from "./../vector-images/wwb-home-page.png";
import videoFeed from "./../vector-images/wwb-video-feed.png";
import feed from "./../vector-images/wwb-feed.png";
import videos from "./../vector-images/wwb-videos.png";
import search from "./../vector-images/wwb-search.png";
import notifications from "./../vector-images/wwb-notifications.png";
import createMosaicMix from "./../vector-images/wwb-create-your-mosaic-mix.png";
import createMosaicMixVideos from "./../vector-images/wwb-create-your-mosaic-mix-videos.png";
import createMosaicMixSound from "./../vector-images/wwb-create-your-mosaic-mix-sound.png";
import createMyVideo from "./../vector-images/wwb-create-my-video-1.png";
import createMyVideoTwo from "./../vector-images/wwb-create-my-video-2.png";
import createMyVideoThree from "./../vector-images/wwb-create-my-video-3.png";
import { PageNames } from "../names";

const wholeWorldBandData = {
  componentName: PageNames.WHOLEWORLDBAND,
  title: "WholeWorldBand",
  description: "Online recording studio for the whole world.",
  icons: [webLight],
  iconsDarkTheme: [darkThemeWebDark],
  homepageImage: homepageWWB,

  mainImage: wwbMain,
  mainImageAlt: "WholeWorldBand",

  aboutProjectArray: [
    "2014 May - Aug (4 months)",
    [["Web"]],
    "181",
    "Lead UX/UI designer, contract work while at Inmusik",
    "I was the only designer for the project and directly responsible for all of the designs you see.",
  ],

  aboutTitle: "About WholeWorldBand",
  aboutArray: [
    "An iPhone/iPad and web application which allows anyone to easily make music and videos with or without their favorite artists and friends that can be shared and enjoyed worldwide. WholeWorldBand acts as a virtual recording studio: users pick a recording session and contribute a vocal, instrumental, visual, or anything they feel like adding using just the camera and microphone in their iOS device. They can share their creation via social media through Facebook, Twitter, YouTube, and Soundcloud. In 2016 WWB rebranded to Youdio.",
    "WWB won the Eircom Spiders Award in November 2014 and Best App at the Digital Media Awards in 2015.",
  ],

  featuresTitle: "Features",
  featuresArray: [
    [
      "Browse video feed ",
      "for other people’s Seed sessions, contributions, mosaic, and video mixes.",
    ],
    ["Create ", "and share your own mosaic and video mixes."],
    [
      "View musician profiles ",
      "to see their activity, videos, followers, who they are following, etc.",
    ],
    [
      "Receive Notifications ",
      "on activities on the platform like if someone liked your mosaic mix if someone shared your mosaic mix etc.",
    ],
    ["Send messages", "to other musicians on WholeWorldBand."],
  ],

  userStoriesTitle: "User stories",
  userStoriesArray: [
    "WholeWorldBand’s customers can be segmented into four main categories: established A-List artists, music fans, aspiring musicians, and brands.",
  ],

  webGalleryTitle: "High fidelity mockups",
  webGalleryParagraph: [
    "The visual design goal for the web application was to give the app a new look that modernized the old iOS application design.",
  ],
  webGalleryImagesArray: [
    [homePage, "Homepage"],
    [videoFeed, "Video feed"],
    [feed, "Feed"],
    [videos, "Musician video page"],
    [search, "Search feature"],
    [notifications, "Notifications feature"],
    [createMosaicMix, "Create a mosaic mix"],
    [createMosaicMixVideos, "Create a mosaic mix videos"],
    [createMosaicMixSound, "Create a mosaic mix sound editing"],
    [createMyVideo, "Create a video"],
    [createMyVideoTwo, "Create a video"],
    [createMyVideoThree, "Add video effects to your video"],
  ],
  webGalleryModalId: "wwb-web-gallery",

  moreDesignProjectsTitle: "More design projects",
};

export default wholeWorldBandData;

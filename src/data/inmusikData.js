import webLight from "./../vector-images/web-logo-lght-gray.svg";
import darkThemeWebDark from "./../vector-images/dark-theme-web-dark.svg";

import IOSLight from "./../vector-images/ios-logo-lght-gray.svg";
import darkThemeIOSDark from "./../vector-images/dark-theme-ios-dark.svg";

import homepageInmusik from "./../vector-images/inmusik-708x708.png";
import inmusikMain from "../vector-images/inmusik-main-2746x1342.png";
import inmusikUserStories from "./../vector-images/inmusik-user-stories.png";
import webDiscovery from "./../vector-images/inmusik-web-discovery.png";
import webGetReady from "./../vector-images/inmusik-web-get-ready.png";
import webQuickplay from "./../vector-images/inmusik-web-quickplay.png";
import webFinishSongs from "./../vector-images/inmusik-web-finished-listen-songs.png";
import webMyProfile from "./../vector-images/inmusik-web-my-profile.png";
import webArtistProfile from "./../vector-images/inmusik-web-artist-profile-home-full-page.png";
import webJournals from "./../vector-images/inmusik-web-journals.png";
import webSongPage from "./../vector-images/inmusik-web-song-page.png";
import iosDiscovery from "./../vector-images/inmusik-ios-discovery.png";
import iosDiscoveryOpenList from "./../vector-images/inmusik-ios-discovery-open-list.png";
import iosDiscoveryTagPage from "./../vector-images/inmusik-ios-discovery-tag-page.png";
import iosMyProfile from "./../vector-images/inmusik-ios-my-profile.png";
import iosAddQuickCollection from "./../vector-images/inmusik-ios-add-quick-collection-pop-up.png";
import iosQuickplayCollectionEnd from "./../vector-images/inmusik-ios-quick-play-collection-end.png";
import iosNameNewCollection from "./../vector-images/inmusik-ios-name-new-collection.png";
import iosFinishedCollection from "./../vector-images/inmusik-ios-finished-collection.png";
import iosQuickplayGetReady from "./../vector-images/inmusik-ios-quick-play-get-ready.png";
import iosQuickplayOnePage from "./../vector-images/inmusik-ios-quick-play-one-page.png";
import iosQuickplayEnd from "./../vector-images/inmusik-ios-quick-play-end.png";
import iosJournals from "./../vector-images/inmusik-ios-journals.png";
import iosArtistPage from "./../vector-images/inmusik-ios-artists-page.png";
import iosArtistPageSongs from "./../vector-images/inmusik-ios-artists-page-songs.png";
import iosSongPage from "./../vector-images/inmusik-ios-song-page.png";
import { PageNames } from "../names";

const inmusikData = {
  componentName: PageNames.INMUSIK,
  title: "Inmusik",
  description: "Social network for emerging musicians and fans.",
  icons: [webLight, IOSLight],
  iconsDarkTheme: [darkThemeWebDark, darkThemeIOSDark],

  homepageImage: homepageInmusik,

  mainImage: inmusikMain,
  mainImageAlt: "Inmusik",

  aboutProjectArray: [
    "2012 Jan - 2016 Jun (4 years, 6 months)",
    [["Web"], ["iOS"]],
    "over 1200 screens in 4 years and 6 months",
    "Product Design Director and Co-Founder",
    "My direct contribution as Product Design Director: My job was to design the product. I designed all the screens for the web and iOS applications from 2012-2016. Came up with features for music listeners to discover new music (Quickplay), how to make playlists using Quickplay, and a way to remind listeners who are the emerging musicians they are following. My direct contribution as a Co-Founder:  Created and managed marketing efforts.",
  ],

  aboutTitle: "About Inmusik",
  aboutArray: [
    "Inmusik is a social music platform for emerging musicians to connect, engage, and monetize their current and future fan engagement.",
    "Emeraz started out as an online collaboration platform in 2010. From 2012-2015 the platform became a social network for musicians and their fans allowing musicians to share, sell their music, gain followers, and more. In 2015, the founder and I rebranded Emeraz to Inmusik. Inmusik shifted the focus of the platform on music listener experience and getting emerging music heard. ",
  ],

  featuresTitle: "Features",
  featuresArray: [
    ["Discover ", "music through quickplay."],
    ["Organize ", "collected music to playlists using quickplay"],
    [
      "Other features: ",
      "follow musicians, listen to music, browse journal entries made by musicians, view musician photos, videos, events, etc.",
    ],
  ],

  userStoriesTitle: "User stories",
  userStoriesArray: [
    "Inmusik has three kinds of users. First is emerging music listeners, second is emerging musicians, third is music industry businesses (recording studios, mixing/mastering engineers, A&Rs/talent scouts, etc).",
  ],
  userStoriesImage: inmusikUserStories,
  userStoriesAlt: "Inmusik user stories",
  userStoriesId: "inmusik-user-stories-modal",

  webGalleryTitle: "High fidelity web mockups",
  webGalleryParagraph:
    "Visual design goals were to distinguish Inmusik platform visually by using royal blue and white color combination. There is also a strong emphasis on typography and layout because content on the platform is generated by the users.",
  webGalleryImagesArray: [
    [webDiscovery, "Discovery page"],
    [webGetReady, "Get ready page"],
    [webQuickplay, "Quickplay"],
    [webFinishSongs, "Quicplay finished page"],
    [webMyProfile, "My profile"],
    [webArtistProfile, "Artist profile"],
    [webJournals, "Journals page"],
    [webSongPage, "Song page"],
  ],
  webGalleryModalId: "inmusik-web-gallery",

  mobileGalleryTitle: "High fidelity iOS mockups",
  mobileGalleryParagraph:
    "The visual design goal for iOS designs was to match the look and feel as close as possible to web design and keep the design platform-agnostic. So that on a later stage when converting the iOS designs for the Android platform would be relatively straight forward.",
  mobileGalleryImagesArray: [
    [iosDiscovery, "Discovery page"],
    [iosDiscoveryOpenList, "Discovery page with open collection"],
    [iosDiscoveryTagPage, "Open tag discovery page"],
    [iosMyProfile, "My profile"],
    [iosAddQuickCollection, "Add quick collection pop up"],
    [iosQuickplayCollectionEnd, "Quickplay collection end"],
    [iosNameNewCollection, "Name new collection page"],
    [iosFinishedCollection, "Finished collection page"],
    [iosQuickplayGetReady, "Quickplay get ready page"],
    [iosQuickplayOnePage, "Quickplay page"],
    [iosQuickplayEnd, "Quickplay end page"],
    [iosJournals, "Journals page"],
    [iosArtistPage, "Artist page"],
    [iosArtistPageSongs, "Artist songs page"],
    [iosSongPage, "Song page"],
  ],
  mobileGalleryModalId: "inmusik-mobile-gallery-modal",

  articlesTitle: "Articles about Inmusik/Emeraz",
  articlesBulletPointsArray: [
    [
      "Irish start-up Inmusik’s move to San Francisco hits right note as it raises $7m (2016)",
      "https://www.siliconrepublic.com/start-ups/in-musik-san-francisco-brand-capital-times-india-china-next-unicorn",
    ],
    [
      "Irish start-up launches its emerging music discovery tool (2014)",
      "https://www.siliconrepublic.com/play/irish-start-up-launches-its-emerging-music-discovery-tool",
    ],
    [
      "Emeraz – The Next Big Thing Officially Launches! (2013)",
      "https://www.musictech.net/news/emeraz-the-next-big-thing-officially-launches/",
    ],
    [
      "Emeraz: The Next Big Thing? (2013)",
      "https://www.musictech.net/news/emeraz-the-next-big-thing/",
    ],
    [
      "Irish start-up Emeraz creates new ‘Personal Song Coach’ for music-makers (2013)",
      "https://www.siliconrepublic.com/gear/irish-start-up-emeraz-creates-new-personal-song-coach-for-music-makers",
    ],
    [
      "Tech start-up of the week: Emeraz.com (2012)",
      "https://www.siliconrepublic.com/start-ups/tech-start-up-of-the-week-emeraz-com",
    ],
  ],

  moreDesignProjectsTitle: "More design projects",
};

export default inmusikData;

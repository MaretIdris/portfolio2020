import webLight from "./../vector-images/web-logo-lght-gray.svg";
import darkThemeWebDark from "./../vector-images/dark-theme-web-dark.svg";

import homepageAbbeyRoadStudios from "./../vector-images/abbey-road-studios-708x708.png";
import abbeyRoadMain from "./../vector-images/abbey-road-main-2746x1342.png";
import personas from "./../vector-images/abbey-road-personas-2x.png";
import oldSite from "./../vector-images/abbey-road-old-site-2x.png";
import sitemap from "./../vector-images/abbey-road-sitemap-2x.png";
import typography from "./../vector-images/abbey-road-typography-2x.png";
import abbeyRoadInteractionDesign from "./../vector-images/abbey-road-interaction-design.png";
import onlineMastering from "./../vector-images/abbey-road-online-mastering.png";
import confirmOrder from "./../vector-images/abbey-road-my-cart-confirm.png";
import studioOne from "./../vector-images/abbey-road-studio-one.png";
import audioProducts from "./../vector-images/abbey-road-audio-products.png";
import engineerPage from "./../vector-images/abbey-road-engineer-page.png";
import eventHire from "./../vector-images/abbey-road-event-hire.png";
import crossingCam from "./../vector-images/abbey-road-crossing-cam.png";
import thankYou from "./../vector-images/abbey-road-thank-you.png";
import { PageNames } from "../names";
import darkThemeIOSDark from "../vector-images/dark-theme-ios-dark.svg";
import darkThemeAndroidDark from "../vector-images/dark-theme-android-dark.svg";

const abbeyRoadStudiosData = {
  componentName: PageNames.ABBEY_ROAD_STUDIOS,
  title: "Abbey Road Studios",
  description: "The most famous recording studio in the world.",
  icons: [webLight],
  iconsDarkTheme: [darkThemeWebDark],
  homepageImage: homepageAbbeyRoadStudios,
  homepageImgAlt: "Abbey Road Studios image",

  mainImage: abbeyRoadMain,
  mainImageAlt: "Abbey Road Studios",

  aboutProjectArray: [
    "2015 Jan - Aug (8 months)",
    [["Web", "https://www.abbeyroad.com/"]],
    "101",
    "UX/UI designer, contract work while at Inmusik",
    "I was the only designer in this project and was directly responsible for delivering all the designs. I redesigned the main Abbey Road Studios website with existing content. I collaborated on creating requirements for new online services like online mixing and online mastering and designed all the high fidelity screens for them.",
  ],

  aboutTitle: "About Abbey Road Studios",
  aboutArray: [
    "Abbey Road Studios is the most famous recording studio in the world. Popular bands and artists like The Beatles, Adele, Stevie Wonder and many more have recorded in this studio.",
    "I was the lead designer in this project creating every design for the public site. The goal of this large project was to redesign the old Abbey Road Studios website and create an easy to navigate single home for all Abby Road brands (studios, institute, RED, store, crossing cam).",
    "Project work also included making it easier to purchase and manage services like online mixing, mastering and create a checkout process for the Abbey Road digital store. The project extended to also designing Abbey Road Studios emails (promotional, welcome and purchase confirmation emails) and also designing an online song competition to promote Abbey Road Studios online mixing and mastering services.",
  ],

  endResultTitle: "End result",

  featuresTitle: "Features",
  featuresArray: [
    [
      "Online services: ",
      "Online services were a new section for the Abbey Road website. I gathered requirements from the Abbey Road team and created user flows, high fidelity screens, and a prototype for online mixing and mastering services. .",
    ],
    [
      "Online mixing and online mastering: ",
      "Create an account, upload music, choose your engineer, add extra services, and pay.",
    ],
    [
      "Audio products: ",
      "Buy Abbey Road Studios plugins and sampled instruments from other retailers.",
    ],
    [
      "Record and mix in Abbey Road Studios: ",
      "Browse each of the Abbey Road 6 studio’s tech and equipment, interactive floor plan, videos recorded in each studio, and request to record in the studios.",
    ],
    [
      "Master in Abbey Road Studios: ",
      "Browse AR Studios 6 mastering suites, tech and equipment, and request to record in the mastering suites.",
    ],
    [
      "Transfer & Archive: ",
      "Transfer, preserve, and restore the music catalog from both analog and digital formats.",
    ],
    ["Event hire: ", "Hire Abbey Road Studios spaces for events."],
    [
      "Crossing cam: ",
      "Find your crossing cam shot after visiting AR Studios.",
    ],
    [
      "Online Store: ",
      "Buy Abbey Road Studios merch directly from Abbey Road Studios",
    ],
    ["RED: ", "Abbey Road music startup incubator."],
    [
      "My account: ",
      "Keep up to date with purchased online mixing and mastering services. Receive messages from sound engineers about your projects.",
    ],
    ["News: ", "Read AR Studios news."],
    [
      "Marketing related designs: ",
      "Win Online EP Master Competition user flow. Email designs for merchandise sales, online mixing and mastering sales, and Abbey Road RED newsletter. Ads designs for Abbey Road Studios website",
    ],
  ],

  personasTitle: "Personas",
  personasParagraphArray: [
    "With the Abbey Road Studios team, I started to identify content from the old website they wanted to keep and the ones they wanted to remove.",
    "In order to understand what to keep and what to disregard, we created 3 personas who represent existing or future Abbey Road customers. We created a user journey for each one of them to make sure their path was thought through and clear.",
  ],
  personasImage: personas,
  personasImageAlt: "Personas",
  personasImageId: "abbey-road-personas-modal",

  oldSiteTitle: "Old website",
  oldSiteParagraphArray: [
    "Old site’s design had become outdated with the yellow color, old logo, and content layout.",
  ],
  oldSiteImage: oldSite,
  oldSiteImageAlt: "Old website",
  oldSiteId: "abbey-road-old-website-modal",

  sitemapTitle: "Sitemap",
  sitemapParagraphArray: [
    "Based on the user journeys of each persona I led the creation and organization of the sitemap with all the pages that needed to be designed and information that needed to be showcased.",
    "This sitemap was created by collaborating with the CEO and the head of marketing of Abbey Road Studios and was kept up to date while working on the project.",
  ],
  sitemapImage: sitemap,
  sitemapImageAlt: "Sitemap",
  sitemapImageId: "abbey-road-sitemap-modal",

  typographyTitle: "Typography & color theme",
  typographyParagraphArray: [
    "Abbey Road had just hired a design agency to redesign their logo. I used their style guide and created my own elements inspired to design the website, ads and custom emails.",
  ],
  typographyImage: typography,
  typographyImageAlt: "Typography & color theme",
  typographyImageId: "abbey-road-typography-modal",

  interactionTitle: "Interaction design",
  interactionParagraphArray: [
    "I created the following high fidelity user flows to communicate the new web design to the outsourced development agency.",
  ],
  interactionImage: abbeyRoadInteractionDesign,
  interactionImageAlt: "Abbey Road Studios Interaction design",
  interactionId: "abbey-road-interaction-design-modal",

  highFiTitle: "High fidelity mockups",
  highFiParagraph:
    "Visual design goals were to keep app looking simple and easy to edit the colours and typography in order to allow the outsourced design company to add the finishing touch.",

  webGalleryTitle: "High fidelity mockups",
  webGalleryParagraph:
    "Visual design goals were to keep app looking simple and easy to edit the colours and typography in order to allow the outsourced design company to add the finishing touch.",
  webGalleryImagesArray: [
    [onlineMastering, "Online mastering page"],
    [confirmOrder, "Confirm order page"],
    [studioOne, "Studio one page"],
    [audioProducts, "Audio products page"],
    [engineerPage, "Engineer page"],
    [eventHire, "Event hire page"],
    [crossingCam, "Crossing cam page"],
    [thankYou, "Thank you page"],
  ],
  webGalleryModalId: "abbey-road-web-gallery",

  moreDesignProjectsTitle: "More design projects",
};

export default abbeyRoadStudiosData;

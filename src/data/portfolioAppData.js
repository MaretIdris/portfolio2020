import homepagePortfolioApp from "./../vector-images/portfolio-app-904x708.svg";
import reactLight from "./../vector-images/react-logo-lght-gray.svg";
import htmlLight from "./../vector-images/html-logo-lght-gray.svg";
import cssLight from "./../vector-images/css-logo-lght-gray.svg";
import portfolioAppMoreCodingProjects from "./../vector-images/portfolio-app-more-projects-1376x708.svg";
import portfolioMain from "./../vector-images/portfolio-main-2792x1366.svg";
import weatherAppFeaturesGif from "../vector-images/weather-app-features.gif";
import weatherAppLocationsGif from "../vector-images/weather-app-locations.gif";
import portfolioAppFeaturesGif from "./../vector-images/portfolio-app-features.gif";
import portfolioAppResponsiveGif from "./../vector-images/portfolio-app-responsive-design.gif";

const portfolioAppData = {
  componentName: "PortfolioApp",
  title: "Portfolio App",
  description:
    "Maret Idris design and code portfolio you are currently browsing.",
  icons: [reactLight, htmlLight, cssLight],
  homepageImage: homepagePortfolioApp,
  homepageImgAlt: "Portfolio app",

  buttonToApp: false,

  mainImage: portfolioMain,
  mainImageAlt: "Portfolio App",

  aboutProjectArray: [
    "2020 Oct - Dec (2 months)",
    [["Web", "https://maretidris.com"]],
    [["Clone the repo", "https://github.com/MaretIdris/portfolio2020"]],
    "Product designer, front-end JavaScript developer",
    "Portfolio app is my project and I created everything from scratch",
  ],

  endResultTitle: "End result",
  // ["Paragraph", Gif, "Gif alt text", "gif-id-for-modal"]
  endResultParagraphGifArray: [
    [
      "The gif below shows features like auto-hide/show navbar, carousels, and lightbox.",
      portfolioAppFeaturesGif,
      "Portfolio app features gif",
      "portfolio-gif-one-modal",
    ],
    [
      "The gif below is showcasing the responsiveness of the portfolio application. I created multiple breakpoints when needed.",
      portfolioAppResponsiveGif,
      "Portfolio app responsive design gif",
      "portfolio-gif-two-modal",
    ],
  ],

  featuresTitle: "Features",
  featuresArray: [
    [
      "Designs: ",
      "Browse some of the best design work I have done in the last 8-years.",
    ],
    ["Code: ", "Browse coding projects I have built in the last 1.5-years."],
    [
      "Hourly ",
      "forecast for the first 48 hours with details like wind, humidity, UV index, dew point, and precipitation.",
    ],
    [
      "About: ",
      "Download my resume and learn more about the things I have done.",
    ],
    [
      "Auto show/hide navigation bar: ",
      "to hide the navigation bar when scrolling down and show it when scrolling up. This feature allows having more space for the content on the page when the navbar doesn’t have to be visible.",
    ],
    [
      "Current location button",
      "Get weather for your current location in one click.",
    ],
  ],

  moreCodingProjectsImage: portfolioAppMoreCodingProjects,
};

export default portfolioAppData;

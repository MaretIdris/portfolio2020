import homepagePortfolioApp from "./../vector-images/portfolio-app-882x708.png";

import reactLight from "./../vector-images/react-logo-lght-gray.svg";
import darkThemeReactDark from "./../vector-images/dark-theme-react-dark.svg";

import HTMLLight from "./../vector-images/html-logo-lght-gray.svg";
import darkThemeHTMLDark from "./../vector-images/dark-theme-html-dark.svg";

import CSSLight from "./../vector-images/css-logo-lght-gray.svg";
import darkThemeCSSDark from "./../vector-images/dark-theme-css-dark.svg";

import portfolioAppMoreCodingProjects from "./../vector-images/portfolio-app-more-projects-1376x708.png";
import portfolioMain from "./../vector-images/portfolio-main-2746x1342.png";
import portfolioAppFeaturesGif from "./../vector-images/portfolio-app-features.gif";
import portfolioAppResponsiveGif from "./../vector-images/portfolio-app-responsive-design.gif";
import { PageNames } from "../names";

const portfolioAppData = {
  componentName: PageNames.PORTFOLIO_APP,
  title: "Portfolio App",
  description:
    "Maret Idris design and code portfolio you are currently browsing.",
  icons: [reactLight, HTMLLight, CSSLight],
  iconsDarkTheme: [darkThemeReactDark, darkThemeHTMLDark, darkThemeCSSDark],

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

import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import weatherAppData from "../data/weatherAppData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import Footer from "./Footer";
import TitleMultipleParagraphGifs from "./TitleMultipleParagraphGifs";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import MoreCodingProjects from "./MoreCodingProjects";

class WeatherApp extends React.Component {
  render() {
    const techSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Technologies</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Code:&nbsp;</span>
              JavaScript (ES 6, asynchronous programming), HTML, CSS.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Tools:&nbsp;</span>
              Webpack, Babel
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>APIs:&nbsp;</span>
              <a
                href="https://darksky.net/dev"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                Dark Sky API
              </a>{" "}
              for the weather data and{" "}
              <a
                href="https://community.algolia.com/places/documentation.html#license"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                Algolio Places API
              </a>{" "}
              to be able to search for a location.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Server:&nbsp;</span>
              In order to get around the CORS issue with Dark Sky API, I used
              Heroku Proxy server,{" "}
              <a
                href="https://github.com/gcollazo/easy-cors-proxy"
                target="_blank"
                rel="noreferrer"
                className="platform-link"
              >
                easy-cors-proxy
              </a>
              .
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Hosting:&nbsp;</span>
              Github pages.
            </p>
          </div>
        </div>
      );
    };

    return (
      <React.Fragment>
        <Header
          projectName={weatherAppData.title}
          description={weatherAppData.description}
          mainImg={weatherAppData.mainImage}
          mainImgAlt={weatherAppData.mainImageAlt}
          buttonToApp={weatherAppData.buttonToApp}
          buttonToAppText={weatherAppData.buttonToAppText}
          buttonToAppLink={weatherAppData.buttonToAppLink}
        />
        <AboutProject
          duration={weatherAppData.aboutProjectArray[0]}
          platformArray={weatherAppData.aboutProjectArray[1]}
          repo={weatherAppData.aboutProjectArray[2]}
          role={weatherAppData.aboutProjectArray[3]}
          contribution={weatherAppData.aboutProjectArray[4]}
        />
        <TitleMultipleParagraphGifs
          title={weatherAppData.endResultTitle}
          paragraphGifsArray={weatherAppData.endResultParagraphGifArray}
        />
        <TitleBulletPointsOneColumn
          title={weatherAppData.featuresTitle}
          bulletPointsArray={weatherAppData.featuresArray}
        />

        {techSection()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy("WeatherApp")}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default WeatherApp;

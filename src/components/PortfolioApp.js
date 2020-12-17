import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleMultipleParagraphGifs from "./TitleMultipleParagraphGifs";
import portfolioAppData from "../data/portfolioAppData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import MoreCodingProjects from "./MoreCodingProjects";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import Footer from "./Footer";

class PortfolioApp extends React.Component {
  render() {
    const techSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Technologies</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>React</span>
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>JavaScript</span>
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>ES6:&nbsp;</span>
              arrow functions, modules, let and const, template literals.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>CSS:&nbsp;</span>
              CSS Flexbox, CSS variables, CSS and JS media queries for
              responsive design.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>
                {" "}
                <a
                  href="https://github.com/mattboldt/typed.js/"
                  target="_blank"
                  rel="noreferrer"
                  className="platform-link"
                >
                  Typed.js
                </a>
              </span>
              , library for the homepage typing effect.
            </p>
          </div>
        </div>
      );
    };
    return (
      <React.Fragment>
        <Header
          projectName={portfolioAppData.title}
          description={portfolioAppData.description}
          mainImg={portfolioAppData.mainImage}
          mainImgAlt={portfolioAppData.mainImageAlt}
          buttonToApp={portfolioAppData.buttonToApp}
          buttonToAppText={portfolioAppData.buttonToAppText}
          buttonToAppLink={portfolioAppData.buttonToAppLink}
        />
        <AboutProject
          duration={portfolioAppData.aboutProjectArray[0]}
          platformArray={portfolioAppData.aboutProjectArray[1]}
          repo={portfolioAppData.aboutProjectArray[2]}
          role={portfolioAppData.aboutProjectArray[3]}
          contribution={portfolioAppData.aboutProjectArray[4]}
        />
        <TitleMultipleParagraphGifs
          title={portfolioAppData.endResultTitle}
          paragraphGifsArray={portfolioAppData.endResultParagraphGifArray}
        />
        <TitleBulletPointsOneColumn
          title={portfolioAppData.featuresTitle}
          bulletPointsArray={portfolioAppData.featuresArray}
        />
        {techSection()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy("PortfolioApp")}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default PortfolioApp;

import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import plannerAppData from "../data/plannerAppData";
import TitleMultipleParagraphGifs from "./TitleMultipleParagraphGifs";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import Footer from "./Footer";
import MoreCodingProjects from "./MoreCodingProjects";
import { getMoreCodingProjectsArrayBy } from "../data/designAndCodingProjectsArrays";

class PlannerApp extends React.Component {
  render() {
    const techSection = () => {
      return (
        <div className="project-page-column-component-container">
          <h2>Technologies</h2>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Vanilla JS (no frameworks):&nbsp;</span>
              JS event delegation, JS events (keyboard events, mouse events,
              form events, resource events).
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>ES6:&nbsp;</span>
              template literals, arrow functions, classes, modules, spread
              syntax, multiline strings, let and const.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>CSS:&nbsp;</span>
              CSS grid and CSS Flexbox for page layouts, CSS variables, CSS and
              JS media queries for responsive design.
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>Tools:&nbsp;</span>
              Webpack, ESLint
            </p>
          </div>
          <div className="bullet-point-container space-between-paragraphs">
            <p className="dash">-</p>
            <p>
              <span>
                {" "}
                <a
                  href="https://github.com/jackmoore/autosize"
                  target="_blank"
                  rel="noreferrer"
                  className="platform-link"
                >
                  Autosize
                </a>
              </span>
              , stand-alone script to automatically adjust textarea to fit the
              text
            </p>
          </div>
        </div>
      );
    };

    return (
      <React.Fragment>
        <Header
          projectName={plannerAppData.title}
          description={plannerAppData.description}
          mainImg={plannerAppData.mainImage}
          mainImgAlt={plannerAppData.mainImageAlt}
          buttonToApp={plannerAppData.buttonToApp}
          buttonToAppText={plannerAppData.buttonToAppText}
          buttonToAppLink={plannerAppData.buttonToAppLink}
        />
        <AboutProject
          duration={plannerAppData.aboutProjectArray[0]}
          platformArray={plannerAppData.aboutProjectArray[1]}
          repo={plannerAppData.aboutProjectArray[2]}
          role={plannerAppData.aboutProjectArray[3]}
          contribution={plannerAppData.aboutProjectArray[4]}
        />
        <TitleMultipleParagraphGifs
          title={plannerAppData.endResultTitle}
          paragraphGifsArray={plannerAppData.endResultParagraphGifArray}
        />
        <TitleBulletPointsOneColumn
          title={plannerAppData.featuresTitle}
          bulletPointsArray={plannerAppData.featuresArray}
        />
        {techSection()}
        <MoreCodingProjects
          codingProjectsArray={getMoreCodingProjectsArrayBy("PlannerApp")}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default PlannerApp;

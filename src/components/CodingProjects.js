import React from "react";
import "./../styles/CodingProjects.css";
// import './../styles/DesignProjects.css'
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";
import { getIntegerValueOfCSSVariable } from "../utils";
import { getPageName } from "../pageConstants";
import { sharedObject } from "./SharedContext";

class CodingProjects extends React.Component {
  constructor(props) {
    super(props);
    this.MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS = +466;
    this.MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS = -466;
    this.HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
    this.imageLoadedCounter = 0;
  }

  componentDidMount() {
    this.initializeVariables();
    this.nextButton.addEventListener("click", this.moveSliderToRight);
    this.previousButton.addEventListener("click", this.moveSliderToLeft);
    window.addEventListener("resize", this.addOrHideButtons);
  }

  initializeVariables = () => {
    this.sectionContainer = document.querySelector(
      "#coding-projects-container"
    );
    this.codingProjectsContainer = document.querySelector(
      "#all-coding-projects"
    );
    this.lastCodingProject = document.querySelector(
      "#all-coding-projects"
    ).lastElementChild;
    this.firstCodingProject = document.querySelector(
      "#all-coding-projects"
    ).firstElementChild;
    this.nextButton = this.sectionContainer.querySelector(".next-button");
    this.previousButton = this.sectionContainer.querySelector(
      ".previous-button"
    );
  };

  doCalculationsAfterAllImagesHaveLoaded = () => {
    // Hide previous button on page load.
    this.hidePreviousButtonIfMarginLeftIsSmall();
    this.hidePreviousButtonIfMarginLeftIsDefault();
    this.hidePreviousButtonIfViewportLargerThan1280Px();
    this.showNextButton();
  };

  /** This gets called after each images is loaded. */
  imageLoaded() {
    this.imageLoadedCounter++;
    if (this.props.codingProjectsArray.length === this.imageLoadedCounter) {
      // Only do this after all the images have been loaded.
      this.doCalculationsAfterAllImagesHaveLoaded();
    }
  }

  hideNextButton = () => {
    this.lastCodingProject.style.marginRight = "0";
    const rightOfLastCodingProject = this.lastCodingProject.getBoundingClientRect()
      .right;
    const rightOfCodingProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .right;
    if (rightOfLastCodingProject === rightOfCodingProjectsContainer)
      this.nextButton.style.opacity = "0";
  };

  showNextButton = () => {
    const rightOfLastCodingProject = this.lastCodingProject.getBoundingClientRect()
      .right;
    const rightOfCodingProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .right;
    if (rightOfLastCodingProject > rightOfCodingProjectsContainer)
      this.nextButton.style.opacity = "1";
  };

  // If DesignProjects component is 600px or smaller, then remove 16px from
  // left of firstDesignProject. That 16px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfMarginLeftIsSmall = () => {
    const leftOfFirstDesignProject =
      this.firstCodingProject.getBoundingClientRect().left -
      getIntegerValueOfCSSVariable(document.body, "--small-page-padding");
    const leftOfProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  // If DesignProjects component is between 601px and 1280px, then remove 31px from
  // left of firstDesignProject. That 31px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfMarginLeftIsDefault = () => {
    const leftOfFirstDesignProject =
      this.firstCodingProject.getBoundingClientRect().left -
      getIntegerValueOfCSSVariable(document.body, "--default-page-padding");
    const leftOfProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  hidePreviousButtonIfViewportLargerThan1280Px = () => {
    const leftOfFirstDesignProject = this.firstCodingProject.getBoundingClientRect()
      .left;
    const leftOfProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstDesignProject === leftOfProjectsContainer)
      this.previousButton.style.opacity = "0";
  };

  showPreviousButton = () => {
    const leftOfFirstCodingProject = this.firstCodingProject.getBoundingClientRect()
      .left;
    const leftOfCodingProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstCodingProject < leftOfCodingProjectsContainer)
      this.previousButton.style.opacity = "1";
  };

  // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
  moveSliderToRight = () => {
    this.codingProjectsContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_RIGHT_ON_CODING_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(this.hideNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    setTimeout(this.showPreviousButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  moveSliderToLeft = () => {
    this.codingProjectsContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_LEFT_ON_CODING_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(
      this.hidePreviousButtonIfMarginLeftIsSmall,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfMarginLeftIsDefault,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfViewportLargerThan1280Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(this.showNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  addOrHideButtons = () => {
    const windowSize = window.innerWidth;
    const maxAppWidth = getIntegerValueOfCSSVariable(
      document.body,
      "--max-app-width"
    );
    if (windowSize < maxAppWidth) {
      // Show next and previous buttons
      // If haven't scrolled yet, hide previous button and show next button
      const leftOfFirstCodingProject = this.firstCodingProject.getBoundingClientRect()
        .left;
      const leftOfCodingProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
        .left;
      if (leftOfFirstCodingProject === leftOfCodingProjectsContainer)
        this.previousButton.style.opacity = "0";

      const rightOfLastCodingProject = this.lastCodingProject.getBoundingClientRect()
        .right;
      const rightOfCodingProjectsContainer = this.codingProjectsContainer.getBoundingClientRect()
        .right;
      if (rightOfLastCodingProject > rightOfCodingProjectsContainer)
        this.nextButton.style.opacity = "1";

      // If have scrolled, show previous button.
      if (leftOfFirstCodingProject < leftOfCodingProjectsContainer)
        this.previousButton.style.opacity = "1";
      // If at the end of the carousel, hide next button.
      if (rightOfLastCodingProject === rightOfCodingProjectsContainer)
        this.nextButton.style.opacity = "0";
    } else {
      // Hide next and previous buttons
      this.hideNextButton();
      this.hidePreviousButtonIfMarginLeftIsDefault();
      this.hidePreviousButtonIfMarginLeftIsSmall();
      this.hidePreviousButtonIfViewportLargerThan1280Px();
    }
  };

  addMarginTopIfProjectPageComponent = () => {
    // Check if component title is not "Design projects", then add class
    // design-project-container-margin-top
    if (this.props.title !== "Coding projects") {
      return "design-project-container-margin-top";
    }
  };

  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";

    const generateIcons = (project) => {
      const imageTags = [];
      if (isDarkTheme) {
        if (project.iconsDarkTheme) {
          project.iconsDarkTheme.map((icon, index) => {
            imageTags.push(<img src={icon} key={index} alt="Icon" />);
          });
        }
      } else {
        if (project.icons) {
          project.icons.map((icon, index) => {
            imageTags.push(<img src={icon} key={index} alt="Icon" />);
          });
        }
      }
      return imageTags;
    };

    return (
      <section
        id="coding-projects-container"
        className={this.addMarginTopIfProjectPageComponent()}
      >
        <h2>{this.props.title}</h2>
        <button className="previous-button coding-button">
          <img src={previousArrow} alt="Previous item button" />
        </button>
        <button className="next-button coding-button">
          <img src={nextArrow} alt="Next item button" />
        </button>
        <div id="all-coding-projects">
          {this.props.codingProjectsArray.map((project, index) => {
            return (
              <div
                className="one-coding-project"
                key={index}
                onClick={() => {
                  sharedObject.onNavigationClicked(getPageName(project.title));
                }}
              >
                <div className="coding-img-zoom">
                  <img
                    className="coding-project-img"
                    src={project.homepageImage}
                    alt={project.homepageImgAlt}
                    onLoad={() => {
                      this.imageLoaded();
                    }}
                    onError={() => {
                      this.imageLoaded();
                    }}
                  />
                </div>

                <div className="title-and-description-container">
                  <h4>{project.title}</h4>
                  <div className="coding-project-description-container">
                    <p className="light-gray-text">{project.description}</p>
                    <div className="icons">{generateIcons(project)}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*/}
          <section className="empty-div"></section>
        </div>
      </section>
    );
  }
}

export default CodingProjects;

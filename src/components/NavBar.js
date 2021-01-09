import React from "react";
import logo from "./../vector-images/logo.svg";
import github from "./../vector-images/github-logo.svg";
import iOsDark from "./../vector-images/ios-logo.svg";
import iOsLight from "./../vector-images/ios-logo-lght-gray.svg";
import androidDark from "./../vector-images/android-logo.svg";
import androidLight from "./../vector-images/android-logo-lght-gray.svg";
import webDark from "./../vector-images/web-logo.svg";
import webLight from "./../vector-images/web-logo-lght-gray.svg";
import reactDark from "./../vector-images/react-logo.svg";
import reactLight from "./../vector-images/react-logo-lght-gray.svg";
import jsDark from "./../vector-images/js-logo.svg";
import jsLight from "./../vector-images/js-logo-lght-gray.svg";
import htmlDark from "./../vector-images/html-logo.svg";
import htmlLight from "./../vector-images/html-logo-lght-gray.svg";
import cssDark from "./../vector-images/css-logo.svg";
import cssLight from "./../vector-images/css-logo-lght-gray.svg";

import "./../styles/NavBar.css";
import { PageNames, PageNamesWithSpaces } from "../names";
import { sharedObject } from "./SharedContext";

const Logo = (props) => {
  return (
    <a
      onClick={() => sharedObject.onNavigationClicked(PageNames.HOME)}
      title="Maret Idris home page"
    >
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
};

const DarkTheme = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

const GitHub = () => {
  return (
    <a
      href="https://github.com/MaretIdris/portfolio2020"
      target="_blank"
      title="Maret Idris Github page"
    >
      <img className="github-logo" src={github} alt="Github logo" />
    </a>
  );
};

const createHomeOrAboutComponent = (props, pageName) => {
  const isActive = (pageName) => {
    if (props.currentDestination === pageName) return "nav-selected";
  };
  return (
    <a
      className={isActive(pageName)}
      onClick={() => sharedObject.onNavigationClicked(pageName)}
    >
      {pageName}
    </a>
  );
};

const getIconsForDropdown = (name, isLightIconSet) => {
  const webAlt = "Web icon";
  const iOSAlt = "iOS icon";
  const androidAlt = "Android logo";
  const reactAlt = "React logo";
  const jsAlt = "JavaScript icon";
  const htmlAlt = "HTML icon";
  const cssAlt = "CSS icon";

  const getIosIcon = () => {
    if (isLightIconSet) return iOsLight;
    else return iOsDark;
  };

  const getAndroidIcon = () => {
    if (isLightIconSet) return androidLight;
    else return androidDark;
  };
  const getWebIcon = () => {
    if (isLightIconSet) return webLight;
    else return webDark;
  };

  const getReactIcon = () => {
    if (isLightIconSet) return reactLight;
    else return reactDark;
  };

  const getJsIcon = () => {
    if (isLightIconSet) return jsLight;
    else return jsDark;
  };

  const getHtmlIcon = () => {
    if (isLightIconSet) return htmlLight;
    else return htmlDark;
  };

  const getCssIcon = () => {
    if (isLightIconSet) return cssLight;
    else return cssDark;
  };

  switch (name) {
    case PageNames.TRUCKX:
      return (
        <React.Fragment>
          <img src={getIosIcon()} alt={iOSAlt} />
          <img src={getAndroidIcon()} alt={androidAlt} />
        </React.Fragment>
      );
    case PageNames.ABBEY_ROAD_STUDIOS:
      return <img src={getWebIcon()} alt={webAlt} />;
    case PageNames.UAMP:
      return <img src={getAndroidIcon()} alt={androidAlt} />;
    case PageNames.INMUSIK:
      return (
        <React.Fragment>
          <img src={getWebIcon()} alt={webAlt} />
          <img src={getIosIcon()} alt={iOSAlt} />
        </React.Fragment>
      );
    case PageNames.WHOLEWORLDBAND:
      return <img src={getWebIcon()} alt={webAlt} />;
    case PageNames.WEATHER_APP:
      return (
        <React.Fragment>
          <img src={getJsIcon()} alt={jsAlt} />
          <img src={getHtmlIcon()} alt={htmlAlt} />
          <img src={getCssIcon()} alt={cssAlt} />
        </React.Fragment>
      );
    case PageNames.PLANNER_APP:
      return (
        <React.Fragment>
          <img src={getJsIcon()} alt={jsAlt} />
          <img src={getHtmlIcon()} alt={htmlAlt} />
          <img src={getCssIcon()} alt={cssAlt} />
        </React.Fragment>
      );
    case PageNames.PORTFOLIO_APP:
      return (
        <React.Fragment>
          <img src={getReactIcon()} alt={reactAlt} />
          <img src={getHtmlIcon()} alt={htmlAlt} />
          <img src={getCssIcon()} alt={cssAlt} />
        </React.Fragment>
      );
  }
};

const createDropdownComponent = (props, name, nameWithSpaces) => {
  const isActive = (destination) => {
    if (props.currentDestination === destination) return "dropdown-selected";
  };

  let isLightIconSet = true;
  if (props.currentDestination === name) isLightIconSet = false;

  return (
    <a
      className={isActive(name)}
      onClick={() => sharedObject.onNavigationClicked(name)}
    >
      <p>{nameWithSpaces}</p>
      <div className="app-logos-container">
        {getIconsForDropdown(name, isLightIconSet)}
      </div>
    </a>
  );
};

const NavBar = (props) => {
  // Function that checks if one of the design projects is active. If it is
  // then it adds black underline to Designs tab.
  const isDesignsNavActive = (destination, pageNameArray) => {
    if (pageNameArray.includes(destination)) return "nav-selected";
  };

  return (
    <div id="app-bar">
      <Logo />
      <nav>
        {createHomeOrAboutComponent(props, PageNames.HOME)}
        <div
          id="designs-container"
          className={isDesignsNavActive(props.currentDestination, [
            PageNames.TRUCKX,
            PageNames.ABBEY_ROAD_STUDIOS,
            PageNames.UAMP,
            PageNames.INMUSIK,
            PageNames.WHOLEWORLDBAND,
          ])}
        >
          Designs
          <div id="designs-dropdown-container">
            <div className="center-the-dropdown">
              <div className="triangle" />
              <div className="dropdown">
                {createDropdownComponent(
                  props,
                  PageNames.TRUCKX,
                  PageNamesWithSpaces.TRUCKX
                )}
                {createDropdownComponent(
                  props,
                  PageNames.ABBEY_ROAD_STUDIOS,
                  PageNamesWithSpaces.ABBEY_ROAD_STUDIOS
                )}
                {createDropdownComponent(
                  props,
                  PageNames.UAMP,
                  PageNamesWithSpaces.UAMP
                )}
                {createDropdownComponent(
                  props,
                  PageNames.INMUSIK,
                  PageNamesWithSpaces.INMUSIK
                )}
                {createDropdownComponent(
                  props,
                  PageNames.WHOLEWORLDBAND,
                  PageNamesWithSpaces.WHOLEWORLDBAND
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          id="code-container"
          className={isDesignsNavActive(props.currentDestination, [
            PageNames.WEATHER_APP,
            PageNames.PLANNER_APP,
            PageNames.PORTFOLIO_APP,
          ])}
        >
          Code
          <div id="code-dropdown-container">
            <div className="center-the-dropdown">
              <div className="triangle" />
              <div className="dropdown code-dropdown-width">
                {createDropdownComponent(
                  props,
                  PageNames.WEATHER_APP,
                  PageNamesWithSpaces.WEATHER_APP
                )}
                {createDropdownComponent(
                  props,
                  PageNames.PLANNER_APP,
                  PageNamesWithSpaces.PLANNER_APP
                )}
                {createDropdownComponent(
                  props,
                  PageNames.PORTFOLIO_APP,
                  PageNamesWithSpaces.PORTFOLIO_APP
                )}
              </div>
            </div>
          </div>
        </div>
        {createHomeOrAboutComponent(props, PageNames.ABOUT)}
      </nav>
      <DarkTheme />
      <GitHub />
    </div>
  );
};

export default NavBar;

import React from "react";

import logo from "./../vector-images/logo.svg";
import darkThemeLogo from "./../vector-images/dark-theme-logo.svg";

import github from "./../vector-images/github-logo.svg";
import darkThemeGithub from "./../vector-images/dark-theme-github-logo.svg";

import iOsDark from "./../vector-images/ios-logo.svg";
import darkThemeIOSDark from "./../vector-images/dark-theme-ios-dark.svg";
import iOsLight from "./../vector-images/ios-logo-lght-gray.svg";
import darkThemeIOSLight from "./../vector-images/dark-theme-ios-light.svg";

import androidDark from "./../vector-images/android-logo.svg";
import darkThemeAndroidDark from "./../vector-images/dark-theme-android-dark.svg";
import androidLight from "./../vector-images/android-logo-lght-gray.svg";
import darkThemeAndroidLight from "./../vector-images/dark-theme-android-light.svg";

import webDark from "./../vector-images/web-logo.svg";
import darkThemeWebDark from "./../vector-images/dark-theme-web-dark.svg";
import webLight from "./../vector-images/web-logo-lght-gray.svg";
import darkThemeWebLight from "./../vector-images/dark-theme-web-light.svg";

import reactDark from "./../vector-images/react-logo.svg";
import darkThemeReactDark from "./../vector-images/dark-theme-react-dark.svg";
import reactLight from "./../vector-images/react-logo-lght-gray.svg";
import darkThemeReactLight from "./../vector-images/dark-theme-react-light.svg";

import JSDark from "./../vector-images/js-logo.svg";
import darkThemeJSDark from "./../vector-images/dark-theme-js-dark.svg";
import JSLight from "./../vector-images/js-logo-lght-gray.svg";
import darkThemeJSLight from "./../vector-images/dark-theme-js-light.svg";

import HTMLDark from "./../vector-images/html-logo.svg";
import darkThemeHTMLDark from "./../vector-images/dark-theme-html-dark.svg";
import HTMLLight from "./../vector-images/html-logo-lght-gray.svg";
import darkThemeHTMLLight from "./../vector-images/dark-theme-html-light.svg";

import CSSDark from "./../vector-images/css-logo.svg";
import darkThemeCSSDark from "./../vector-images/dark-theme-css-dark.svg";
import CSSLight from "./../vector-images/css-logo-lght-gray.svg";
import darkThemeCSSLight from "./../vector-images/dark-theme-css-light.svg";

import "./../styles/NavBar.css";
import { PageNames, PageNamesWithSpaces } from "../names";
import { sharedObject } from "./SharedContext";

class Logo extends React.Component {
  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";
    return (
      <a
        id="link-for-logo"
        onClick={() => sharedObject.onNavigationClicked(PageNames.HOME)}
        title="Maret Idris home page"
      >
        <img
          className="logo"
          src={isDarkTheme ? darkThemeLogo : logo}
          alt="Logo"
        />
      </a>
    );
  }
}

// Should the toggle id go to parent (label) or child (span)
// https://stackoverflow.com/a/25264860/10029397
// How to add attributes conditionally in jsx: https://stackoverflow.com/a/31164090/10029397
class DarkThemeChooser extends React.Component {
  render() {
    const isChecked = this.props.myDarkThemeValue.getValue() === "true";
    const changeThemeOnClickLambda = this.props.changeThemeOnClickLambda;
    return (
      <label className="switch">
        <input
          id="dark-theme-checkbox"
          type="checkbox"
          readOnly
          checked={isChecked}
          onClick={changeThemeOnClickLambda}
        />
        <span id="dark-theme-button" className="slider"></span>
      </label>
    );
  }
}

class GitHub extends React.Component {
  render() {
    const isDarkTheme = this.props.myDarkThemeValue.getValue() === "true";
    return (
      <a
        href="https://github.com/MaretIdris/portfolio2020"
        target="_blank"
        title="Maret Idris Github page"
        id="github-logo-on-nav-bar"
      >
        <img
          className="github-logo"
          src={isDarkTheme ? darkThemeGithub : github}
          alt="Github logo"
        />
      </a>
    );
  }
}

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

const getIconsForDropdown = (name, isSelected, isDarkTheme) => {
  const webAlt = "Web icon";
  const iOSAlt = "iOS icon";
  const androidAlt = "Android logo";
  const reactAlt = "React logo";
  const jsAlt = "JavaScript icon";
  const htmlAlt = "HTML icon";
  const cssAlt = "CSS icon";

  const getIosIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeIOSLight : darkThemeIOSDark;
    } else {
      return isSelected ? iOsDark : iOsLight;
    }
  };

  const getAndroidIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeAndroidLight : darkThemeAndroidDark;
    } else {
      return isSelected ? androidDark : androidLight;
    }
  };

  const getWebIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeWebLight : darkThemeWebDark;
    } else {
      return isSelected ? webDark : webLight;
    }
  };

  const getReactIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeReactLight : darkThemeReactDark;
    } else {
      return isSelected ? reactDark : reactLight;
    }
  };

  const getJsIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeJSLight : darkThemeJSDark;
    } else {
      return isSelected ? JSDark : JSLight;
    }
  };

  const getHtmlIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeHTMLLight : darkThemeHTMLDark;
    } else {
      return isSelected ? HTMLDark : HTMLLight;
    }
  };

  const getCssIcon = () => {
    if (isDarkTheme) {
      return isSelected ? darkThemeCSSLight : darkThemeCSSDark;
    } else {
      return isSelected ? CSSDark : CSSLight;
    }
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
  const isDarkTheme = props.myDarkThemeValue.getValue() === "true";

  const isActive = (destination) => {
    if (props.currentDestination === destination) return "dropdown-selected";
  };

  let isSelected = false;
  if (props.currentDestination === name) isSelected = true;

  return (
    <a
      className={isActive(name)}
      onClick={() => sharedObject.onNavigationClicked(name)}
    >
      <p>{nameWithSpaces}</p>
      <div className="app-logos-container">
        {getIconsForDropdown(name, isSelected, isDarkTheme)}
      </div>
    </a>
  );
};

const darkThemeColorGrayDarkest = "#CFCFCF";
const darkThemeColorWhite = "#1B1C1E";
const darkThemeColorHoverBg = "#141414";
const darkThemeColorGrayAccent = "#303030";
const darkThemeColorTriangleBorder = "#141414";
const darkThemeDropdownBoxShadow = "0 1px 3px 0 rgba(0,0,0,1)";
const darkThemeDropdownTriangleBoxShadow = "0 1px 1px 0 rgba(0, 0, 0, 1);";
const darkThemeHighlightText = "#1B1C1E";

const lightThemeColorGrayDarkest = "#303030";
const lightThemeColorWhite = "#FFFFFF";
const lightThemeColorHoverBg = "#EFEFEF";
const lightThemeColorGrayAccent = "#DFDFDF";
const lightThemeColorTriangleBorder = "#DFDFDF";
const lightThemeDrowdownBoxShadow = "0 1px 3px 0 rgba(0,0,0,0.4)";
const lightThemeDropdownTriangleBoxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.4)";

class NavBar extends React.Component {
  componentDidMount() {
    const myDarkThemeValue = this.props.myDarkThemeValue;

    if (myDarkThemeValue.getValue() === "true") {
      this.applyDarkTheme();
      const checkbox = document.querySelector("#dark-theme-checkbox");
      checkbox.checked = true;
    }
  }

  applyDarkTheme = () => {
    document.documentElement.style.setProperty(
      "--color-gray-darkest",
      darkThemeColorGrayDarkest
    );
    document.documentElement.style.setProperty(
      "--color-white",
      darkThemeColorWhite
    );
    document.documentElement.style.setProperty(
      "--color-gray-hover-bckround",
      darkThemeColorHoverBg
    );
    document.documentElement.style.setProperty(
      "--color-gray-accent",
      darkThemeColorGrayAccent
    );
    document.documentElement.style.setProperty(
      "--color-triangle-border",
      darkThemeColorTriangleBorder
    );
    document.documentElement.style.setProperty(
      "--dropdown-box-shadow",
      darkThemeDropdownBoxShadow
    );
    document.documentElement.style.setProperty(
      "--dropdown-triangle-box-shadow",
      darkThemeDropdownTriangleBoxShadow
    );
    document.documentElement.style.setProperty(
      "--color-highlight-text",
      darkThemeHighlightText
    );
  };

  applyLightTheme = () => {
    document.documentElement.style.setProperty(
      "--color-gray-darkest",
      lightThemeColorGrayDarkest
    );
    document.documentElement.style.setProperty(
      "--color-white",
      lightThemeColorWhite
    );
    document.documentElement.style.setProperty(
      "--color-gray-hover-bckround",
      lightThemeColorHoverBg
    );
    document.documentElement.style.setProperty(
      "--color-gray-accent",
      lightThemeColorGrayAccent
    );
    document.documentElement.style.setProperty(
      "--color-triangle-border",
      lightThemeColorTriangleBorder
    );
    document.documentElement.style.setProperty(
      "--dropdown-box-shadow",
      lightThemeDrowdownBoxShadow
    );
    document.documentElement.style.setProperty(
      "--dropdown-triangle-box-shadow",
      lightThemeDropdownTriangleBoxShadow
    );
    document.documentElement.style.setProperty(
      "--color-highlight-text",
      lightThemeColorGrayDarkest
    );
  };

  changeThemeOnClick = (myDarkThemeValue) => {
    if (myDarkThemeValue.getValue() === "true") {
      // Light theme
      myDarkThemeValue.setValue("false");
      this.applyLightTheme();
    } else {
      // Dark theme
      myDarkThemeValue.setValue("true");
      this.applyDarkTheme();
    }
  };

  render() {
    // Function that checks if one of the design projects is active. If it is
    // then it adds black underline to Designs tab.
    const isDesignsNavActive = (destination, pageNameArray) => {
      if (pageNameArray.includes(destination)) return "nav-selected";
    };

    return (
      <div id="app-bar">
        <Logo myDarkThemeValue={this.props.myDarkThemeValue} />
        <nav>
          {createHomeOrAboutComponent(this.props, PageNames.HOME)}
          <div
            id="code-container"
            className={isDesignsNavActive(this.props.currentDestination, [
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
                    this.props,
                    PageNames.WEATHER_APP,
                    PageNamesWithSpaces.WEATHER_APP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.PLANNER_APP,
                    PageNamesWithSpaces.PLANNER_APP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.PORTFOLIO_APP,
                    PageNamesWithSpaces.PORTFOLIO_APP
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            id="designs-container"
            className={isDesignsNavActive(this.props.currentDestination, [
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
                    this.props,
                    PageNames.TRUCKX,
                    PageNamesWithSpaces.TRUCKX
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.ABBEY_ROAD_STUDIOS,
                    PageNamesWithSpaces.ABBEY_ROAD_STUDIOS
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.UAMP,
                    PageNamesWithSpaces.UAMP
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.INMUSIK,
                    PageNamesWithSpaces.INMUSIK
                  )}
                  {createDropdownComponent(
                    this.props,
                    PageNames.WHOLEWORLDBAND,
                    PageNamesWithSpaces.WHOLEWORLDBAND
                  )}
                </div>
              </div>
            </div>
          </div>
          {createHomeOrAboutComponent(this.props, PageNames.ABOUT)}
        </nav>
        <div id="dark-theme-and-github-container">
          <DarkThemeChooser
            myDarkThemeValue={this.props.myDarkThemeValue}
            changeThemeOnClickLambda={() => {
              this.changeThemeOnClick(this.props.myDarkThemeValue);
            }}
          />
          <GitHub myDarkThemeValue={this.props.myDarkThemeValue} />
        </div>
      </div>
    );
  }
}

export default NavBar;

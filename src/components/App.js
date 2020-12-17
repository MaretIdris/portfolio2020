import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import {
  getComponentForPageName,
  PAGE_NAME_PREFIX,
  URL_PAGE_KEY,
} from "../pageConstants";
import { scrollToTop } from "../utils";
import { sharedObject } from "./SharedContext";
import { PageNames } from "../names";

/**
 * More info: https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams#Example
 *
 * @return PageName from the search param (URL_PATH_KEY) in window.location.
 */
const getPageNameFromWindowLocation = () => {
  const params = new URL(document.location).searchParams;
  const pathValueInURL = params.get(URL_PAGE_KEY);
  if (!pathValueInURL) return PageNames.HOME;
  if (!getComponentForPageName(pathValueInURL)) return PageNames.HOME;
  else return pathValueInURL;
};

const updateDocumentTitle = (title) => {
  if (!title) return;
  document.title = PAGE_NAME_PREFIX + title;
};

/**
 * Update an already created state w/ the destination. Do not call this
 * in the constructor when state hasn't been created yet.
 * Note that setState() is an asynchronous function.
 * More info: https://stackoverflow.com/a/41446620/2085356
 *
 * @param component React component who's state is being modified.
 * @param destination PageName that is saved to the component's state.
 */
const updateStateWithDestination = (component, destination) => {
  scrollToTop();
  component.setState({ destination }, () => {
    // This is called after the state is actually updated (asynchronously).
    console.log("App.state updated: ", component.state);
  });
  updateDocumentTitle(destination);
};

const DARK_THEME = "darkTheme";

class DarkThemeValue {
  constructor(enclosingComponent) {
    this.darkTheme = "false";
    this.enclosingComponent = enclosingComponent;
    let valueFromLocalStorage = localStorage.getItem(DARK_THEME);
    if (!valueFromLocalStorage) {
      localStorage.setItem(DARK_THEME, "false");
    } else {
      this.darkTheme = valueFromLocalStorage;
    }
  }

  getValue() {
    return this.darkTheme;
  }

  setValue(newValue) {
    this.darkTheme = newValue;
    localStorage.setItem(DARK_THEME, newValue);
    this.enclosingComponent.setState({ myDarkThemeValue: this });
  }
}

class App extends Component {
  // More info on creating state and setState: https://daveceddia.com/where-initialize-state-react/
  constructor(props) {
    super(props);
    const destination = props.pageName;
    const myDarkThemeValue = new DarkThemeValue(this);
    this.state = { myDarkThemeValue, destination };
    sharedObject.onNavigationClicked = this.onNavigationClicked;
    updateDocumentTitle(destination);
  }

  componentDidMount() {
    this.props.runAfterAppIsMounted();
    window.addEventListener("popstate", this.handleBrowserHistoryPopState);
  }

  onNavigationClicked = (destination) => {
    this.handleBrowserHistoryPushState(destination);
    updateStateWithDestination(this, destination);
  };

  /**
   * Push state: https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
   *
   * @param destination Make sure to pass this to the event that handlePopState will use.
   */
  handleBrowserHistoryPushState = (destination) => {
    const url = new URL(window.location);
    url.searchParams.set(URL_PAGE_KEY, destination);
    const browserHistoryState = { destination };
    window.history.pushState(browserHistoryState, destination, url);
  };

  /**
   * Pop state: http://html5doctor.com/history-api/
   *
   * @param event Contains destination which is added when pushState is called.
   */
  handleBrowserHistoryPopState = (event) => {
    const browserHistoryState = event.state;
    // https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
    let { destination } = { browserHistoryState };
    if (!destination) {
      destination = getPageNameFromWindowLocation();
    }
    updateStateWithDestination(this, destination);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          currentDestination={this.state.destination}
          myDarkThemeValue={this.state.myDarkThemeValue}
        />
        {getComponentForPageName(
          this.state.destination,
          this.state.myDarkThemeValue
        )}
      </React.Fragment>
    );
  }
}

export { App, getPageNameFromWindowLocation };

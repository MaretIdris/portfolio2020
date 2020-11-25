import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import { getComponentForPageName, PageNames } from "../pageConstants";
import { scrollToTop } from "../utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { destination: this.getCurrentPath() };
    console.log("App.state: ", this.state);
  }

  getCurrentPath() {
    let pathName = this.props.windowLocationPathname.split("/")[1];
    if (!getComponentForPageName(pathName)) pathName = PageNames.HOME;
    return pathName;
  }

  componentDidMount() {
    this.props.runAfterMount();
  }

  /**
   * setState() is an asynchronous function.
   * https://stackoverflow.com/a/41446620/2085356
   */
  onNavigationClicked = (destination) => {
    this.setState({ destination }, () => {
      console.log(this.state);
    });
    window.history.pushState({}, null, destination);
    scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          currentDestination={this.state.destination}
          onNavigationClicked={this.onNavigationClicked}
        />
        {getComponentForPageName(
          this.state.destination,
          this.onNavigationClicked
        )}
      </React.Fragment>
    );
  }
}

export default App;

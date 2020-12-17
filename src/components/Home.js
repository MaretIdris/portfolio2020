import React from "react";
import Banner from "./Banner";
import DesignProjects from "./DesignProjects";
import CodingProjects from "./CodingProjects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import {
  arrayOfCodingProjects,
  arrayOfDesignProjects,
  homepageCodingProjectsTitle,
  homepageDesignProjectsTitle,
} from "../data/projectsData";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner
          strings={[
            "a UI Engineer",
            "passionate about front-end web technologies",
            "startup tested",
          ]}
        />
        <CodingProjects
          title={homepageCodingProjectsTitle}
          codingProjectsArray={arrayOfCodingProjects}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <DesignProjects
          title={homepageDesignProjectsTitle}
          designProjectsArray={arrayOfDesignProjects}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Testimonials />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default Home;

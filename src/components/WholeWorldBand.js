import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import wholeWorldBandData from "../data/wholeWorldBandData";
import Footer from "./Footer";
import TitleParagraphWebGallery from "./TitleParagraphWebGallery";
import DesignProjects from "./DesignProjects";
import { getMoreDesignProjectsArrayBy } from "../data/designAndCodingProjectsArrays";

class WholeWorldBand extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          projectName={wholeWorldBandData.title}
          description={wholeWorldBandData.description}
          mainImg={wholeWorldBandData.mainImage}
          mainImgAlt={wholeWorldBandData.mainImageAlt}
        />
        <AboutProject
          duration={wholeWorldBandData.aboutProjectArray[0]}
          platformArray={wholeWorldBandData.aboutProjectArray[1]}
          screens={wholeWorldBandData.aboutProjectArray[2]}
          role={wholeWorldBandData.aboutProjectArray[3]}
          contribution={wholeWorldBandData.aboutProjectArray[4]}
        />
        <TitleParagraph
          title={wholeWorldBandData.aboutTitle}
          paragraphArray={wholeWorldBandData.aboutArray}
        />
        <TitleBulletPointsOneColumn
          title={wholeWorldBandData.featuresTitle}
          bulletPointsArray={wholeWorldBandData.featuresArray}
        />
        <TitleParagraph
          title={wholeWorldBandData.userStoriesTitle}
          paragraphArray={wholeWorldBandData.userStoriesArray}
        />
        <TitleParagraphWebGallery
          title={wholeWorldBandData.webGalleryTitle}
          paragraph={wholeWorldBandData.webGalleryParagraph}
          webGalleryImagesArray={wholeWorldBandData.webGalleryImagesArray}
          webGalleryModalId={wholeWorldBandData.webGalleryModalId}
        />
        <DesignProjects
          title={wholeWorldBandData.moreDesignProjectsTitle}
          designProjectsArray={getMoreDesignProjectsArrayBy("WholeWorldBand")}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default WholeWorldBand;

import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import TitleParagraphImage from "./TitleParagraphImage";
import TitleParagraphMobileGallery from "./TitleParagraphMobileGallery";
import inmusikData from "../data/inmusikData";
import Footer from "./Footer";
import TitleParagraphWebGallery from "./TitleParagraphWebGallery";
import TitleBulletPointsOneColumnWithLinks from "./TitleBulletPointsOneColumnWithLinks";
import DesignProjects from "./DesignProjects";
import { getMoreDesignProjectsArrayBy } from "../data/designAndCodingProjectsArrays";

class Inmusik extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          projectName={inmusikData.title}
          description={inmusikData.description}
          mainImg={inmusikData.mainImage}
          mainImgAlt={inmusikData.mainImageAlt}
        />
        <AboutProject
          duration={inmusikData.aboutProjectArray[0]}
          platformArray={inmusikData.aboutProjectArray[1]}
          screens={inmusikData.aboutProjectArray[2]}
          role={inmusikData.aboutProjectArray[3]}
          contribution={inmusikData.aboutProjectArray[4]}
        />
        <TitleParagraph
          title={inmusikData.aboutTitle}
          paragraphArray={inmusikData.aboutArray}
        />
        <TitleBulletPointsOneColumn
          title={inmusikData.featuresTitle}
          bulletPointsArray={inmusikData.featuresArray}
        />

        <TitleParagraphImage
          title={inmusikData.userStoriesTitle}
          paragraphArray={inmusikData.userStoriesArray}
          image={inmusikData.userStoriesImage}
          imageAlt={inmusikData.userStoriesAlt}
          imageId={inmusikData.userStoriesId}
        />

        <TitleParagraphWebGallery
          title={inmusikData.webGalleryTitle}
          paragraph={inmusikData.webGalleryParagraph}
          webGalleryImagesArray={inmusikData.webGalleryImagesArray}
          webGalleryModalId={inmusikData.webGalleryModalId}
        />

        <TitleParagraphMobileGallery
          title={inmusikData.mobileGalleryTitle}
          paragraph={inmusikData.mobileGalleryParagraph}
          mobileGalleryImagesArray={inmusikData.mobileGalleryImagesArray}
          mobileGalleryModalId={inmusikData.mobileGalleryModalId}
        />
        <TitleBulletPointsOneColumnWithLinks
          title={inmusikData.articlesTitle}
          bulletPointsArray={inmusikData.articlesBulletPointsArray}
        />
        <DesignProjects
          title={inmusikData.moreDesignProjectsTitle}
          designProjectsArray={getMoreDesignProjectsArrayBy("Inmusik")}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default Inmusik;

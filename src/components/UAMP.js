import React from "react";
import Header from "./Header";
import AboutProject from "./AboutProject";
import TitleParagraph from "./TitleParagraph";
import uampData from "../data/uampData";
import TitleBulletPointsOneColumn from "./TitleBulletPointsOneColumn";
import TitleParagraphImage from "./TitleParagraphImage";
import ColOneTextColTwoImg from "./ColOneTextColTwoImg";
import TitleParagraphMobileGallery from "./TitleParagraphMobileGallery";
import DesignProjects from "./DesignProjects";
import { getMoreDesignProjectsArrayBy } from "../data/designAndCodingProjectsArrays";
import Footer from "./Footer";
import { PageNames } from "../names";

class UAMP extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          projectName={uampData.title}
          description={uampData.description}
          mainImg={uampData.mainImage}
          mainImgAlt={uampData.mainImageAlt}
        />
        <AboutProject
          duration={uampData.aboutProjectArray[0]}
          platformArray={uampData.aboutProjectArray[1]}
          screens={uampData.aboutProjectArray[2]}
          role={uampData.aboutProjectArray[3]}
          contribution={uampData.aboutProjectArray[4]}
        />
        <TitleParagraph
          title={uampData.aboutTitle}
          paragraphArray={uampData.aboutArray}
        />
        <TitleParagraphImage
          title={uampData.endResultTitle}
          image={uampData.highFiImage}
          imageAlt={uampData.highFiImageAlt}
          imageId={uampData.highFiId}
          mobileDesign={uampData.mobileDesign}
        />
        <TitleBulletPointsOneColumn
          title={uampData.featuresTitle}
          bulletPointsArray={uampData.featuresArray}
        />
        <TitleParagraph
          title={uampData.userStoriesTitle}
          paragraphArray={uampData.userStoriesArray}
        />
        <TitleParagraph
          title={uampData.requirementsTitle}
          paragraphArray={uampData.requirementsArray}
        />
        <TitleParagraphImage
          title={uampData.oldSiteTitle}
          image={uampData.oldSiteImage}
          imageAlt={uampData.oldSiteImageAlt}
          imageId={uampData.oldSiteId}
        />
        <TitleParagraphImage
          title={uampData.wireframesTitle}
          paragraphArray={uampData.wireframesParagraphArray}
          image={uampData.wireframesImage}
          imageAlt={uampData.wireframeImageAlt}
          imageId={uampData.wireframesId}
        />
        <TitleParagraphImage
          title={uampData.interactionTitle}
          paragraphArray={uampData.interactionParagraphArray}
          image={uampData.interactionImage}
          imageAlt={uampData.interactionImageAlt}
          imageId={uampData.interactionId}
        />
        <ColOneTextColTwoImg
          title={uampData.lowFiTitle}
          paragraph={uampData.lowFiParagraph}
          image={uampData.lowFiImage}
          imageAlt={uampData.lowFiImageAlt}
          imageId={uampData.lowFiId}
        />
        <ColOneTextColTwoImg
          title={uampData.typographyTitle}
          paragraph={uampData.typographyParagraphArray}
          image={uampData.typographyImage}
          imageAlt={uampData.typographyImageAlt}
          imageId={uampData.typographyImageId}
        />
        <TitleParagraphMobileGallery
          title={uampData.mobileGalleryTitle}
          paragraph={uampData.mobileGalleryParagraph}
          mobileGalleryImagesArray={uampData.mobileGalleryImagesArray}
          mobileGalleryModalId={uampData.mobileGalleryModalId}
        />
        <ColOneTextColTwoImg
          title={uampData.highFiTitle}
          paragraph={uampData.highFiParagraph}
          image={uampData.highFiImage}
          imageAlt={uampData.highFiImageAlt}
          imageId={uampData.highFiId}
        />
        <DesignProjects
          title={uampData.moreDesignProjectsTitle}
          designProjectsArray={getMoreDesignProjectsArrayBy(PageNames.UAMP)}
          myDarkThemeValue={this.props.myDarkThemeValue}
        />
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default UAMP;

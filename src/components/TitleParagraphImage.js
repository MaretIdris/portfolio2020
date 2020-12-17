import React from "react";
import { closeModal, openModal } from "../utils";

const TitleParagraphImage = ({
  title,
  paragraphArray,
  image,
  imageAlt,
  imageId,
  mobileDesign,
}) => {
  // Only add paragraph(s) if it exists.
  const paragraphElement = () => {
    if (paragraphArray !== undefined) {
      const paragraphs = [];
      paragraphArray.map((paragraph, index) =>
        paragraphs.push(
          <p key={index} className="space-between-paragraphs">
            {paragraph}
          </p>
        )
      );
      return paragraphs;
    }
  };

  // If it's mobile design add inline styling with smaller width and center the
  // design.
  const mobile = {
    maxWidth: "277px",
    display: "flex",
    alignSelf: "center",
  };

  const addExtraStylesIfMobileDesign = () => {
    if (mobileDesign) {
      return mobile;
    }
  };

  const imageElement = (imageId) => {
    return (
      <React.Fragment>
        <img
          src={image}
          alt={imageAlt}
          className="image-bottom-margin responsive-image"
          style={addExtraStylesIfMobileDesign()}
          onClick={() => openModal(imageId)}
        />
        <div id={imageId} className="modal">
          <span className="close cursor" onClick={() => closeModal(imageId)}>
            <div></div>
          </span>
          <img src={image} className="modal-content" alt={imageAlt} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="project-page-column-component-container">
      <h2>{title}</h2>
      {paragraphElement()}
      {imageElement(imageId)}
    </div>
  );
};

export default TitleParagraphImage;

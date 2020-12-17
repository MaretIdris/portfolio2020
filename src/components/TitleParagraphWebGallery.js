import React, { Component } from "react";
import previousArrow from "../vector-images/arrow-left.svg";
import nextArrow from "../vector-images/arrow-right.svg";
import { closeModal, getIntegerValueOfCSSVariable, openModal } from "../utils";

// This component is similar to TitleParagraphMobileGallery component.
// Pass this component following props:
// - title={}
// - paragraph={}
// - webGalleryImagesArray={}
// - webGalleryModalId={}
class TitleParagraphWebGallery extends Component {
  constructor(props) {
    super(props);
    this.MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS = +425;
    this.MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS = -425;
    this.HIDE_AND_SHOW_BUTTONS_TIMEOUT = 400;
    this.imageLoadedCounter = 0;
  }

  componentDidMount() {
    this.initializeVariables();
    this.nextButton.addEventListener("click", this.moveSliderToRight);
    this.previousButton.addEventListener("click", this.moveSliderToLeft);
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  initializeVariables = () => {
    this.sectionContainer = document.querySelector("#web-gallery-container");
    this.webGalleryImagesContainer = document.querySelector(
      "#all-web-gallery-images"
    );
    this.lastImage = document.querySelector(
      "#all-web-gallery-images"
    ).lastElementChild;
    this.firstImage = document.querySelector(
      "#all-web-gallery-images"
    ).firstElementChild;
    this.nextButton = this.sectionContainer.querySelector(".next-button");
    this.previousButton = this.sectionContainer.querySelector(
      ".previous-button"
    );
  };

  doCalculationsAfterAllImagesHaveLoaded = () => {
    // Hide previous button on page load.
    this.hidePreviousButtonIfViewportLargerThan1280Px();
    this.hidePreviousButtonIfViewportSmallerThan601Px();
    this.hidePreviousButtonIfViewport601To1280Px();
    this.showNextButton();
  };

  // This gets called after each images is loaded.
  imageLoaded() {
    this.imageLoadedCounter++;
    if (this.props.webGalleryImagesArray.length === this.imageLoadedCounter) {
      // Only do this after all the images have been loaded.
      this.doCalculationsAfterAllImagesHaveLoaded();
    }
  }

  hideNextButton = () => {
    const rightOfLastImage = this.lastImage.getBoundingClientRect().right;
    const rightOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .right;
    if (rightOfLastImage === rightOfWebGalleryImagesContainer)
      this.nextButton.style.opacity = "0";
  };

  showNextButton = () => {
    const rightOfLastImage = this.lastImage.getBoundingClientRect().right;
    const rightOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .right;
    if (rightOfLastImage > rightOfWebGalleryImagesContainer)
      this.nextButton.style.opacity = "1";
  };

  // If TitleParagraphWebGallery component is 600px or smaller, then remove 16px from
  // left of firstImage. That 16px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewportSmallerThan601Px = () => {
    let leftOfFirstImage =
      this.firstImage.getBoundingClientRect().left -
      getIntegerValueOfCSSVariable(document.body, "--small-page-padding");
    const leftOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfWebGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  // If TitleParagraphWebGallery component is between 601px and 1280px, then remove 31px from
  // left of firstImage. That 31px is a margin that getBoundingClientRect()
  // doesn't include.
  hidePreviousButtonIfViewport601To1280Px = () => {
    const leftOfFirstImage =
      this.firstImage.getBoundingClientRect().left -
      getIntegerValueOfCSSVariable(document.body, "--default-page-padding");
    const leftOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfWebGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  hidePreviousButtonIfViewportLargerThan1280Px = () => {
    const leftOfFirstImage = this.firstImage.getBoundingClientRect().left;
    const leftOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .left;
    if (leftOfFirstImage === leftOfWebGalleryImagesContainer)
      this.previousButton.style.opacity = "0";
  };

  showPreviousButton = () => {
    const leftOfFirstImage = this.firstImage.getBoundingClientRect().left;
    const leftOfWebGalleryImagesContainer = this.webGalleryImagesContainer.getBoundingClientRect()
      .left;

    if (leftOfFirstImage < leftOfWebGalleryImagesContainer)
      this.previousButton.style.opacity = "1";
  };

  // scrollBy: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
  moveSliderToRight = () => {
    this.webGalleryImagesContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_RIGHT_ON_DESIGNS_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(this.hideNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
    setTimeout(this.showPreviousButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  moveSliderToLeft = () => {
    this.webGalleryImagesContainer.scrollBy({
      top: 0,
      left: this.MOVE_SLIDER_TO_LEFT_ON_DESIGNS_PROJECTS,
      behavior: "smooth",
    });
    setTimeout(
      this.hidePreviousButtonIfViewportLargerThan1280Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfViewportSmallerThan601Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(
      this.hidePreviousButtonIfViewport601To1280Px,
      this.HIDE_AND_SHOW_BUTTONS_TIMEOUT
    );
    setTimeout(this.showNextButton, this.HIDE_AND_SHOW_BUTTONS_TIMEOUT);
  };

  plusSlides = (n) => {
    this.showSlides((this.slideIndex += n));
  };

  currentSlide = (n) => {
    this.showSlides((this.slideIndex = n));
  };

  showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("one-web-slide");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  };

  render() {
    return (
      <section
        id="web-gallery-container"
        className="project-page-column-component-container"
      >
        <h2>{this.props.title}</h2>
        <p className="space-between-paragraphs">{this.props.paragraph}</p>
        <button className="previous-button web-gallery-button">
          <img src={previousArrow} alt="Previous item button" />
        </button>
        <button className="next-button web-gallery-button">
          <img src={nextArrow} alt="Next item button" />
        </button>

        <div id="all-web-gallery-images">
          {this.props.webGalleryImagesArray.map((image, index) => {
            return (
              <img
                src={image[0]}
                alt={image[1]}
                key={index}
                className="one-web-gallery-image image-bottom-margin responsive-image"
                onLoad={() => this.imageLoaded()}
                onError={() => this.imageLoaded()}
                onClick={() => {
                  openModal(this.props.webGalleryModalId);
                  this.currentSlide(index + 1);
                }}
              />
            );
          })}
          {/* Empty-div class is for collapsing margins: https://www.smashingmagazine.com/2019/07/margins-in-css/*/}
          <div className="empty-div-project-page"></div>
        </div>

        <div id={this.props.webGalleryModalId} className="modal">
          <span
            className="close cursor"
            onClick={() => closeModal(this.props.webGalleryModalId)}
          >
            <div></div>
          </span>
          <div>
            {this.props.webGalleryImagesArray.map((image, index) => {
              return (
                <img
                  src={image[0]}
                  alt={image[1]}
                  key={index}
                  className="modal-content one-web-slide"
                />
              );
            })}
            <button
              className="modal-previous-button"
              onClick={() => this.plusSlides(-1)}
            >
              <img src={previousArrow} alt="Previous item button" />
            </button>
            <button
              className="modal-next-button"
              onClick={() => this.plusSlides(1)}
            >
              <img src={nextArrow} alt="Next item button" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default TitleParagraphWebGallery;

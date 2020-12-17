import React from "react";
import "./../styles/About.css";
import resume from "./../vector-images/2021-resume-maret-idris.docx";
import Footer from "./Footer";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.headingTextWithBreak =
      "Welcome to my code and <br />design portfolio!";
    this.headingText = "Welcome to my code and design portfolio!";
  }

  componentDidMount() {
    const heading = document.querySelector("#about-heading");

    const replaceHeadingText = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 680) {
        heading.innerHTML = this.headingText;
      } else {
        heading.innerHTML = this.headingTextWithBreak;
      }
    };
    window.addEventListener("resize", replaceHeadingText);

    replaceHeadingText();
  }

  render() {
    const heading = () => {
      return (
        <section className="banner">
          <h3 id="about-heading" className="h3-padding about-title">
            {this.headingTextWithBreak}
          </h3>
          <a
            href={resume}
            download="maret-idris-resume"
            className="try-app-button"
          >
            Download resume
          </a>
        </section>
      );
    };

    const designCards = () => {
      return (
        <section className="design-cards-container">
          <div className="design-card first-card">
            <h5 className="h5-padding">Maret Idris</h5>
            <ul>
              <li className="responsive-list">
                <span className="secondary-font-bold">Email: </span>
                <span className="secondary-font">
                  maret.career@fasterlap.com
                </span>
              </li>
              <li className="responsive-list">
                <span className="secondary-font-bold">Coding experience: </span>
                <span className="secondary-font">2 years.</span>
              </li>
              <li className="responsive-list">
                <span className="secondary-font-bold">Design experience: </span>
                <span className="secondary-font">7 years.</span>
              </li>
              <br />
              <li>
                <span className="secondary-font-bold">Strengths: </span>
                <ul>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">UI/visual design.</span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">End-to-end design.</span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">
                      Prototyping (JavaScript, React, HTML, CSS) in code using
                      real data.
                    </span>
                  </li>
                  <li className="bullet-point-container">
                    <span className="dash-regular-weight secondary-font">
                      -
                    </span>
                    <span className="secondary-font">
                      Attention to details.
                    </span>
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <span className="secondary-font-bold last-line">
                  Weakness:{" "}
                </span>
                <span className="secondary-font last-line">
                  In-depth user research.
                </span>
              </li>
            </ul>
          </div>
          <div className="design-card second-card">
            <h5 className="h5-padding">
              What have I been up to for the last 2 years
            </h5>
            <p>
              In Jan 2019 I left R3BL to learn how to code full time. I learned
              responsive web design, HTML, CSS, advanced JavaScript (including
              asynchronous JavaScript), React, CSS, and JS animation, how to use
              tools like Webpack, ESLint, version control with git, GitHub, how
              to use the terminal, and CLIs, etc.
            </p>
            <br />
            <p>
              I was taught and mentored by a Google SWE, I read books and took
              courses online. I was curious about how my designs were
              implemented and how technology can help to make better user
              experiences.
            </p>
            <br />
            <p>
              Because I learned to code, I understand the capabilities &
              constraints of technology and how they apply to the user
              experience through designs. I can build interactive prototypes in
              code, I can effectively communicate with engineers using their
              terminology.
            </p>
          </div>
        </section>
      );
    };

    const thingsIDo = () => {
      return (
        <section className="vertical-title-container first-card">
          <h5 className="h5-padding">Things I do</h5>
          <ul>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">
                  Responsive web design
                </span>
                <span className="secondary-font">&nbsp;(2 years)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Static web design</span>
                <span className="secondary-font">&nbsp;(2.5 years)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Android design</span>
                <span className="secondary-font">&nbsp;(1 year)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">iOS design</span>
                <span className="secondary-font">&nbsp;(1.5 years)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Visual design</span>
                <span className="secondary-font">
                  &nbsp;using Figma, Sketch, Photoshop
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">Interaction design</span>
                <span className="secondary-font">
                  &nbsp;using Figma, Sketch
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">
                  Prototyping using code{" "}
                </span>
                <span className="secondary-font">
                  (JavaScript, HTML, CSS, React, npm, Webpack)
                </span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <div>
                <span className="secondary-font-bold">
                  Prototyping using tools
                </span>
                <span className="secondary-font">&nbsp;(Invision, Sketch)</span>
              </div>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">
                Ideation and wireframing
              </span>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <span className="secondary-font-bold">User research</span>
            </li>
          </ul>
        </section>
      );
    };

    const articlesIWrote = () => {
      const screenDensity =
        "https://blog.prototypr.io/designing-for-multiple-screen-densities-on-android-5fba8afe7ead";
      const responsive =
        "https://blog.prototypr.io/a-pragmatic-guide-to-designing-and-building-responsive-web-applications-ff625dd2f206";
      const flexboxOne =
        "https://developerlife.com/2017/11/15/flexbox-getting-started-part-1-2/";
      const flexboxTwo =
        "https://developerlife.com/2017/11/15/flexbox-building-a-navigation-bar-part-2-2/";

      return (
        <section className="vertical-title-container second-card">
          <h5 className="h5-padding">Articles I've published</h5>
          <ul>
            <li className="secondary-font">
              I can build responsive web applications. I understand how
              micro-interactions can enhance user experience. I understand how
              to keep data in mind when designing, etc.
            </li>
            <br />
            <li className="secondary-font">
              I share my knowledge of how to do it on{" "}
              <a
                href="https://developerlife.com/category/UXE/"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                developerlife.com
              </a>{" "}
              and{" "}
              <a
                href="https://medium.com/@maret.idris"
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link-no-font-size"
              >
                Medium
              </a>{" "}
              (Prototypr and codeburst).
            </li>
            <br />
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <a
                href={screenDensity}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Designing for multiple screen densities on Android
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <a
                href={responsive}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                A pragmatic guide to designing and building responsive web
                applications
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <a
                href={flexboxOne}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Flexbox: Getting started (Part 1/2)
              </a>
            </li>
            <li className="bullet-point-container">
              <span className="dash-regular-weight secondary-font">-</span>
              <a
                href={flexboxTwo}
                target="_blank"
                rel="noreferrer"
                className="secondary-font-link"
              >
                Flexbox: Building a navigation bar (Part 2/2)
              </a>
            </li>
          </ul>
        </section>
      );
    };

    return (
      <React.Fragment>
        {heading()}
        {designCards()}
        <div className="design-cards-container remove-padding-bottom">
          {thingsIDo()}
          {articlesIWrote()}
        </div>
        <Footer myDarkThemeValue={this.props.myDarkThemeValue} />
      </React.Fragment>
    );
  }
}

export default About;

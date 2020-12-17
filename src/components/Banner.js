import React from "react";
import Typed from "typed.js";
import "./../styles/Banner.css";

/**
 * For more information on Typed.js, please take a look at:
 * 1. https://github.com/mattboldt/typed.js/
 * 2. http://mattboldt.github.io/typed.js/docs/
 * 3. https://jsfiddle.net/mattboldt/ovat9jmp/
 */

class Banner extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap banner">
        <h3>👋🏻 Hi, I am Maret Idris</h3>
        <div className="type-wrap">
          I&nbsp; am&nbsp;
          <span
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Banner;

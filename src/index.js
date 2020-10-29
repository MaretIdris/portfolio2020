import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { getValueOfCSSVariable } from "./CSSUtils";

// This function positions nav bar dropdowns.
const myWindowResizeListener = () => {
    const designsContainer = document.querySelector("#designs-container");
    const designsContainerStyle = getComputedStyle(designsContainer);
    const designsContainerMarginLeft = parseInt(
        designsContainerStyle.marginLeft
    );
    const designsContainerWidth =
        designsContainer.offsetWidth + designsContainerMarginLeft;
    const designsContainerRect = designsContainer.getBoundingClientRect();
    const designsContainerX = designsContainerRect.left;

    const designDropdown = document.querySelector("#designs-dropdown-container");
    const designDropdownStyle = getComputedStyle(designDropdown);
    const designDropdownMarginLeft = parseInt(designDropdownStyle.marginLeft);
    const designDropdownWidth = designDropdown.offsetWidth + designDropdownMarginLeft;

    // Set the CSS 'left' property of the computed style for `dropdown` to some computed number.
    const n1 = designsContainerX + designsContainerWidth / 2;
    const n2 = n1 - designDropdownWidth / 2;
    designDropdown.style.left = n2 + "px";
};

// Function that adds animation for dropdown menu.
function attachAnimationForDropdownMenu() {
    const dropdown = document.querySelector("#designs-dropdown-container");
    const dropdownOpacityAnimationDelay = getValueOfCSSVariable(
        dropdown,
        "--dropdown-opacity-animation-delay"
    );

    let timeoutId = null;

    const fadeIn = () => {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        dropdown.style.opacity = "1";
        dropdown.style.visibility = "visible";
        dropdown.style.position = "fixed";
        dropdown.style.marginTop = "-6px";
        dropdown.style.transition = `opacity ${dropdownOpacityAnimationDelay}ms, margin ${dropdownOpacityAnimationDelay}ms`;
    };

    const fadeOut = () => {
        dropdown.style.opacity = "0";
        dropdown.style.marginTop = "-3px";
        dropdown.style.transition = `opacity ${dropdownOpacityAnimationDelay}ms, margin ${dropdownOpacityAnimationDelay}ms`;
        timeoutId = setTimeout(() => {
            dropdown.style.visibility = "hidden";
            dropdown.style.position = "absolute";
            timeoutId = null;
        }, dropdownOpacityAnimationDelay);
    };

    const designsContainer = document.querySelector("#designs-container");
    designsContainer.addEventListener("mouseenter", fadeIn);
    // designsContainer.addEventListener("mouseleave", fadeOut);

    // const codeContainer = document.querySelector("#code-container")
    // codeContainer.addEventListener("mouseenter", fadeIn);
    // codeContainer.addEventListener("mouseleave", fadeOut);
}

const handleAutoHideAppBar = (appBarElement, appBarHeight) => {
    let prevScrollPosition = window.pageYOffset;
    window.onscroll = () => {
        const currentScrollPosition = window.pageYOffset;

        let showValue = "0";
        let hideValue = "-" + appBarHeight + "px";

        if (
            prevScrollPosition === currentScrollPosition &&
            prevScrollPosition !== 0
        ) {
            // Page has refreshed, but it was already scrolled down.
            appBarElement.style.top = showValue;
            return;
        }

        if (prevScrollPosition > currentScrollPosition) {
            // Scroll up.
            appBarElement.style.top = showValue;
        } else {
            // Scroll down.
            appBarElement.style.top = hideValue;
        }
        prevScrollPosition = currentScrollPosition;
    };
};

const runAfterMount = () => {
    // Attach a window resize listener and run it once.
    window.addEventListener("resize", myWindowResizeListener);
    myWindowResizeListener();

    // Enable animation for the dropdown menu.
    attachAnimationForDropdownMenu();
    const appBar = document.querySelector("#app-bar");
    const height = getValueOfCSSVariable(appBar, "--app-bar-height");
    handleAutoHideAppBar(appBar, height);
};

ReactDOM.render(
  <React.StrictMode>
    <App runAfterMount={runAfterMount}/>
  </React.StrictMode>,
  document.getElementById('root')
);


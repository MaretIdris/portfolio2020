let enableNavBarAutoHide = true;

const showAppBar = () => {
  const appBarElement = document.querySelector("#app-bar");
  appBarElement.style.top = "0";
};

const handleAutoHideAppBar = (appBarElement, appBarHeight) => {
  let prevScrollPosition = window.pageYOffset;
  const numberOfPixelsToIgnore = 64;

  window.onscroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (
      currentScrollPosition < numberOfPixelsToIgnore ||
      prevScrollPosition === currentScrollPosition
    ) {
      console.log("window.onscroll event ignored");
      return;
    }
    console.log("window.onscroll event fired");

    if (enableNavBarAutoHide) {
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
    }

    prevScrollPosition = currentScrollPosition;
  };
};

const handleDisableAutoHide = (id) => {
  document.getElementById(id).onmouseenter = () => {
    console.log(`${id} mouseenter - disable navbar autohide`);
    enableNavBarAutoHide = false;
  };
  document.getElementById(id).onmouseleave = () => {
    console.log(`${id} mouseleave - enable navbar autohide`);
    enableNavBarAutoHide = true;
  };
};

export { handleAutoHideAppBar, handleDisableAutoHide, showAppBar };

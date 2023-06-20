import React, { forwardRef, useEffect } from "react";

const Banner = forwardRef(({ label, title, children, ...props }, ref) => {
  useEffect(() => {
    const banner = document.getElementById("banner");
    const navButton = document.getElementById("navButton");
    if (navButton && banner) {
      navButton.style.height = banner.clientHeight + "px";
    }
  }, []);

  return <div {...props}>{children}</div>;
});

export default Banner;

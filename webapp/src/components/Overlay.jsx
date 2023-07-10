import React, { createRef, forwardRef, useRef, useState } from "react";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../css/banner.css";
import "../../css/navbar.css";
import "../../css/sidebar.css";
import "../../css/overlay.css";

const Overlay = forwardRef(
  (
    {
      header,
      banner,
      navbar,
      sidebar,
      body,
      bannerProps,
      navbarProps,
      sidebarProps,
      bannerChildren,
      navbarChildren,
      sidebarChildren,
      ...props
    },
    ref
  ) => {
    const bannerRef = useRef();
    const navbarRef = useRef();
    const sidebarRef = useRef();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleNavButtonClick = () => {
      const sidebar = sidebarRef.current;
      if (!sidebar) {
        setSidebarOpen(false);
      } else {
        if (sidebarOpen) {
          sidebar.style.display = "none";
        } else {
          sidebar.style.display = "block";
        }
        setSidebarOpen(!sidebarOpen);
      }
    };

    return (
      <div id="overlayContainer" className="overlay" ref={ref} {...props}>
        {header ? (
          header
        ) : (
          <header id="overlayHeader" className="header">
            <button
              id="bannerNavButton"
              className="nav-button banner-sonoma"
              onClick={handleNavButtonClick}>
              &#9776;
            </button>
            {banner ? (
              banner
            ) : (
              <Banner
                id="overlayBanner"
                className="banner banner-sonoma"
                ref={bannerRef}
                {...bannerProps}
                children={bannerChildren}
              />
            )}
            {navbar ? (
              navbar
            ) : (
              <Navbar
                id="overlayNavbar"
                className="navbar"
                ref={navbarRef}
                {...navbarProps}
                children={navbarChildren}
              />
            )}
          </header>
        )}
        {sidebar ? (
          sidebar
        ) : (
          <Sidebar
            id="overlaySidebar"
            ref={sidebarRef}
            {...sidebarProps}
            children={sidebarChildren}
          />
        )}
        {body ? (
          body
        ) : (
          <div id="overlayBody" className="body">
            {props.children}
          </div>
        )}
      </div>
    );
  }
);

export default Overlay;

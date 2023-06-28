import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Courses from "../../components/courseComponents/Courses";
import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/courses.css";

const DhHomeOverlay = (props) => {
  const [degreeName, setDegreeName] = useState("");
  const [showCourses, setShowCourses] = useState(false);
  const label = "Catalog Search";

  useEffect(() => {
    handleNavOpen();
  }, []);

  const handleNavOpen = () => {
    resizeViewport();
  };

  const resizeViewport = () => {
    const viewport = document.getElementById("builderView");
    if (viewport) {
      const animateLeft = async () => {
        viewport.style.transition = "padding-left 0.7s ease-in-out";
        // Animate the page "shrink" right
        setTimeout(() => {
          viewport.style.paddingLeft = "0";
        }, 0.1);
      };
      animateLeft().then();
    }

    const bannerNav = document.getElementById("bannerNavButton");
    if (bannerNav) {
      bannerNav.style.display = "none";
    }

    const bannerLabel = document.getElementById("bannerLabel");
    if (bannerLabel) {
      bannerLabel.hidden = true;
    }

    const bannerDegreeName = document.getElementById("bannerDegreeName");
    if (bannerDegreeName) {
      bannerDegreeName.style.marginTop = "3px";
      bannerDegreeName.style.paddingLeft = "10px";
    }
  };

  const handleCoursesClick = () => {
    setShowCourses(true);
  };

  const renderBanner = () => {
    return (
      <Banner id="builderBanner" className="banner banner-sonoma">
        <h5>{label}</h5>
        <button
          id="bannerNavButton"
          className="banner-button banner-sonoma banner-xlarge"
          onClick={handleNavOpen}
        >
          &#9776;
        </button>
        <div style={{ alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5
              id="bannerLabel"
              style={{
                paddingTop: "7px",
                marginBottom: 0,
                marginRight: "10px",
              }}
            >
              {label}
            </h5>
            <h3 id="bannerDegreeName" style={{ marginTop: 0 }}>
              {degreeName}
            </h3>
          </div>
        </div>
      </Banner>
    );
  };

  const renderNavbar = () => {
    return (
      <Navbar id="builderNavbar" className="navbar navbar-material">
        <div className="container" style={{ alignItems: "left" }}>
          <div className="navbarItem selected">
            <span>Programs</span>
          </div>
          <div className="navbarItem">
            Departments
          </div>
          <div className="navbarItem">
            <span className="navbarLink" onClick={handleCoursesClick}>
              Courses
            </span>
          </div>
          <div className="navbarItem">
            My Schedules
          </div>
        </div>
      </Navbar>
    );
  };

  return (
    <div id="builderOverlay" className="builder-overlay" {...props}>
      {renderBanner()}
      {renderNavbar()}
      {showCourses && <Courses />}
    </div>
  );
};

export default DhHomeOverlay;

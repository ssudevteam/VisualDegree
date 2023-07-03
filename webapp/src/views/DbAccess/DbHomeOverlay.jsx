import React, { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";

import Courses from "../../components/DbAccessComponents/courseComponents/Courses";
import Programs from "../../components/DbAccessComponents/programComponents/Programs";
import Departments from "../../components/DbAccessComponents/departmentComponents/Departments";
import Schedules from "../../components/DbAccessComponents/scheduleComponents/Schedules";

import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/sidebar.css";
import "../../../css/DbAccessData.css";

const DhHomeOverlay = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showSchedules, setShowSchedules] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  useEffect(() => {
    handleNavOpen();
    window.addEventListener("resize", handleNavOpen);
    return () => {
      window.removeEventListener("resize", handleNavOpen);
    };
  }, []);

  const handleNavOpen = () => {
    resizeViewport();
  };

  const resizeViewport = () => {
    const sidebar = document.getElementById("builderSidebar");
    const viewport = document.getElementById("builderView");

    if (sidebar && viewport) {
      if (sidebar.style.display !== "none") {
        const sidebarWidth = sidebar.offsetWidth;
        viewport.style.paddingLeft = `${sidebarWidth}px`;
      } else {
        viewport.style.paddingLeft = "0";
      }
    }
  };

  const handleCoursesClick = () => {
    setShowCourses(true);
    setShowPrograms(false);
    setShowDepartments(false);
    setShowSchedules(false);
  };

  const handleProgramsClick = () => {
    setShowCourses(false);
    setShowPrograms(true);
    setShowDepartments(false);
    setShowSchedules(false);
  };

  const handleDepartmentsClick = () => {
    setShowCourses(false);
    setShowPrograms(false);
    setShowDepartments(true);
    setShowSchedules(false);
  };

  const handleSchedulesClick = () => {
    setShowCourses(false);
    setShowPrograms(false);
    setShowDepartments(false);
    setShowSchedules(true);
  };

  const renderBanner = () => {
    return (
      <Banner id="builderBanner" className="banner banner-sonoma">
        <h5>Dashboard</h5>
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
            ></h5>
            <h3 id="bannerDegreeName" style={{ marginTop: 0 }}></h3>
          </div>
        </div>
      </Banner>
    );
  };

  const renderNavbar = () => {
    return (
      <Navbar id="builderNavbar" className="navbar navbar-material">
        <div className="container" style={{ alignItems: "left" }}>
          <div className="navbarItem">
            <span className="navbarLink" onClick={handleProgramsClick}>
              Programs
            </span>
          </div>
          <div className="navbarItem">
            <span className="navbarLink" onClick={handleDepartmentsClick}>
              Departments
            </span>
          </div>
          <div className="navbarItem">
            <span className="navbarLink" onClick={handleCoursesClick}>
              Courses
            </span>
          </div>
          <div className="navbarItem">
            <span className="navbarLink" onClick={handleSchedulesClick}>
              All Schedules
            </span>
          </div>
        </div>
      </Navbar>
    );
  };

  return (
    <div id="builderOverlay" className="builder-overlay">
      {renderBanner()}
      {renderNavbar()}
      {showCourses && <Courses />}
      {showPrograms && <Programs />}
      {showDepartments && <Departments />}
      {showSchedules && <Schedules />}
    </div>
  );
};

export default DhHomeOverlay;

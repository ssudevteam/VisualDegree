import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import csNodes from "../../reactflow/data/cs_flow_nodes";

import Courses from "../../components/DbAccessComponents/courseComponents/Courses";
import Programs from "../../components/DbAccessComponents/programComponents/Programs";
import Departments from "../../components/DbAccessComponents/departmentComponents/Departments";

import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/sidebar.css";
import "../../../css/DbAccessData.css";

const DhHomeOverlay = (props) => {
  const [degreeName, setDegreeName] = useState("");
  const [showCourses, setShowCourses] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState("");
  const [courseList, setCourseList] = useState([]);
  const degreeList = ["Computer Science", "Other Degrees"];

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
        // Sidebar is open
        const sidebarWidth = sidebar.offsetWidth;
        viewport.style.paddingLeft = `${sidebarWidth}px`;
      } else {
        // Sidebar is closed
        viewport.style.paddingLeft = "0";
      }
    }
  };

  const handleCoursesClick = () => {
    setShowCourses(true);
    setShowPrograms(false); // Reset showPrograms state to false
    setShowDepartments(false);
  };

  const handleProgramsClick = () => {
    setShowPrograms(true);
    setShowCourses(false); // Reset showCourses state to false
    setShowDepartments(false);
  };

  const handleDepartmentsClick = () => {
    setShowDepartments(true);
    setShowCourses(false); // Reset showCourses state to false
    setShowPrograms(false); // Reset showPrograms state to false
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
          <div className="navbarItem">My Schedules</div>
        </div>
      </Navbar>
    );
  };

  const updateCourseListCallback = React.useCallback((degree) => {
    if (degree === "Computer Science") {
      setCourseList(csNodes); // Assuming csNodes is defined elsewhere
    } else {
      setCourseList([]);
    }
  }, [csNodes]);

  const handleDegreeSelect = async (event) => {
    const degree = event.target.value;
    setSelectedDegree(degree);
    setDegreeName(degree);

    const setBannerTitle = () => {
      const banner = document.getElementById("builderBanner");
      if (banner) {
        banner.title = degreeName;
      }
    };
    setBannerTitle();

    await updateCourseListCallback(degree);
  };

  const degreeSelectBox = () => {
    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
        }}
      >
        <label htmlFor="degreeSelect">Select Degree:</label>
        <select
          id="degreeSelect"
          value={selectedDegree}
          onChange={handleDegreeSelect}
        >
          <option value="">-- Select --</option>
          {degreeList.map((degree, index) => (
            <option key={index} value={degree}>
              {degree}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderCourseListBox = () => {
    if (!courseList || courseList.length === 0) {
      return <></>;
    }

    return (
      <div
        id="courseList"
        style={{
          paddingTop: "15px",
          position: "relative",
        }}
      >
        <h4 style={{ paddingLeft: "10px" }}>Courses</h4>
        <div
          id="courseListBox"
          className="course-list-box scrollbar-thin scrollbar-track-lightgray scrollbar-thumb-hover-darkgray"
          style={{
            borderRadius: "1%",
            marginLeft: "3%",
            marginRight: "3%",
            borderTop: "groove",
            borderLeft: "groove",
            borderBottom: "ridge",
            borderRight: "none",
            overflowY: "scroll",
            maxHeight: "calc(80vh)",
          }}
        >
          {courseList.map((course, index) => (
            <button
              key={index}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "ridge",
              }}
            >
              {course.data.label.split("-")[0].trim()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="builderOverlay" className="builder-overlay" {...props}>
      <Sidebar id="builderSidebar">{degreeSelectBox()}</Sidebar>
      {renderBanner()}
      {renderNavbar()}
      {showCourses && <Courses />}
      {showPrograms && <Programs />}
      {showDepartments && <Departments />}
      {renderCourseListBox()}
    </div>
  );
};

export default DhHomeOverlay;

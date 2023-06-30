import React, { createRef, useState, useEffect, useCallback } from "react";
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import FontSelector from "../../components/UserSettings/FontSelector";
import LanguageSelector from "../../components/UserSettings/LanguageSelector";
import csNodes from "../../reactflow/data/cs_flow_nodes";
import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/sidebar.css";

const DegreeBuilderOverlay = (props) => {
  const initialDegreeList = [
    "Computer Science",
    "Mathematics",
    "Psychology",
    "Business",
  ];
  const [selectedDegree, setSelectedDegree] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [degreeList, setDegreeList] = useState(initialDegreeList);
  const [courseList, setCourseList] = useState([]);
  const sidebarRef = createRef();
  const label = "VisualDegree";

  useEffect(() => {
    // TEMPORARY
    setDegreeList([
      "Computer Science",
      "Mathematics",
      "Psychology",
      "Business",
    ]);
    // async function fetchInitialDegreeList() {
    //     setDegreeList(await getAllDegreePrograms());
    // }
    //
    // fetchInitialDegreeList().then();
    handleNavOpen();
    updateCourseListCallback(degreeName);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.getElementById("builderSidebar");
      if (sidebar && sidebar.style.display !== "none") {
        resizeViewport();
      } else {
        resizeViewportNoSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const updateCourseListCallback = useCallback(
    (degree) => {
      if (degree === "Computer Science") {
        setCourseList(csNodes);
      } else {
        setCourseList([]);
      }
    },
    [csNodes]
  );

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
    renderCourseListBox();
  };

  const degreeSelectBox = () => {
    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
        }}>
        <label htmlFor="degreeSelect">Select Degree:</label>
        <select
          id="degreeSelect"
          value={selectedDegree}
          onChange={handleDegreeSelect}>
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

  const renderOptions = () => {
    // This should be presented somewhere within the overlay that doesn't take up space
    //  consider perhaps using a button on the right-side of the banner that can provide these selectors.

    return <></>;

    /*return (
                <footer id='footer' className='footer banner-sonoma'>
                    <FontSelector/>
                    <LanguageSelector/>
                </footer>
            );*/
  };

  // const updateCourseList = async (degreeName) => {
  //     const courses = await getCoursesForDegree(degreeName);
  //     setCourseList(courses);
  //     // renderCourseListBox();
  // }

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
        }}>
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
          }}>
          {courseList.map((course, index) => (
            <button
              key={index}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "ridge",
              }}>
              {course.data.label.split("-")[0].trim()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleNavOpen = () => {
    resizeViewport();
  };

  const handleNavClose = () => {
    resizeViewportNoSidebar();
  };

  const resizeViewport = () => {
    const sidebar = document.getElementById("builderSidebar");
    const viewport = document.getElementById("builderView");
    if (viewport && sidebar) {
      const animateLeft = async () => {
        viewport.style.transition = "padding-left 0.7s ease-in-out";
        // Animate the page "shrink" right
        setTimeout(() => {
          viewport.style.paddingLeft = sidebar.offsetWidth + "px";
        }, 0.1);
      };
      animateLeft().then();

      if (sidebar) {
        sidebar.style.display = "block";
      }
    }

    const navButton = document.getElementById("sidebarNavButton");
    if (navButton) {
      navButton.style.width = "100%";
      navButton.style.height = "auto";
    }

    const bannerNav = document.getElementById("bannerNavButton");
    if (bannerNav) {
      bannerNav.style.display = "none";
    }

    const bannerLabel = document.getElementById("bannerLabel");
    if (bannerLabel) {
      bannerLabel.hidden = 1;
    }

    const bannerDegreeName = document.getElementById("bannerDegreeName");
    if (bannerDegreeName) {
      bannerDegreeName.style.marginTop = "3px";
      bannerDegreeName.style.paddingLeft = "10px";
    }
  };
  const resizeViewportNoSidebar = () => {
    const sidebar = document.getElementById("builderSidebar");
    if (sidebar) {
      sidebar.style.display = "none";
    }

    const elements = [];
    elements.push(document.getElementById("builderView"));
    const banner = document.getElementById("builderBanner");
    elements.push(banner);
    const bannerNavButton = document.getElementById("bannerNavButton");
    elements.push(bannerNavButton);
    elements.forEach((element) => {
      if (element) {
        element.style = "";
      }
    });

    const bannerLabel = document.getElementById("bannerLabel");
    if (bannerLabel) {
      bannerLabel.hidden = false;
    }

    const bannerDegreeName = document.getElementById("bannerDegreeName");
    if (bannerDegreeName) {
      bannerDegreeName.style.paddingLeft = "0";
    }

    if (bannerNavButton && banner) {
      bannerNavButton.style.setProperty(
        "height",
        banner.clientHeight + "px",
        "important"
      );
    }
  };

  const renderNavButton = () => {
    return (
      <button
        id="sidebarNavButton"
        className="sidebar-banner banner-button banner-sonoma"
        onClick={handleNavClose}>
        <h5>{label}</h5>
      </button>
    );
  };

  const renderBanner = () => {
    return (
      <Banner id="builderBanner" className="banner banner-sonoma">
        <button
          id="bannerNavButton"
          className="banner-button banner-sonoma banner-xlarge"
          onClick={handleNavOpen}>
          &#9776;
        </button>
        <div style={{ alignItems: "center" }}>
          <h5
            id="bannerLabel"
            style={{
              paddingTop: "7px",
              marginBottom: 0,
            }}>
            {label}
          </h5>
          <h3 id="bannerDegreeName" style={{ marginTop: 0 }}>
            {degreeName}
          </h3>
        </div>
      </Banner>
    );
  };

  const renderNavbar = () => {
    return (
      <Navbar id="builderNavbar" className="navbar navbar-material">
        <div className="container" style={{ alignItems: "left" }}>
          <div className="navbarItem selected" style={{ marginTop: 0 }}>
            <span>Major</span>
          </div>
          <div className="navbarItem" style={{ marginTop: 0 }}>
            GE
          </div>
          <div className="navbarItem" style={{ marginTop: 0 }}>
            Catalog
          </div>
          <div className="navbarItem" style={{ marginTop: 0 }}>
            My Semester
          </div>
        </div>
      </Navbar>
    );
  };

  const renderSidebar = () => {
    return (
      <Sidebar
        id="builderSidebar"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        ref={sidebarRef}
        label={label}>
        {renderNavButton()}
        <div
          id="sidebarContent"
          className="scrollbar-hidden"
          style={{
            padding: 10,
            minHeight: "100%",
          }}>
          {degreeSelectBox()}
          {renderCourseListBox()}
        </div>
        {renderOptions()}
      </Sidebar>
    );
  };

  return (
    <div id="builderOverlay" className="builder-overlay" {...props}>
      {renderBanner()}
      {renderNavbar()}
      {renderSidebar()}
    </div>
  );
};
export default DegreeBuilderOverlay;

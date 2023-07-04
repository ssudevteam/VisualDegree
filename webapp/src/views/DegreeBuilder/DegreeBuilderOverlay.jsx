import React, { useState, useCallback } from "react";
import Navbar from "../../components/Navbar";
import FontSelector from "../../components/UserSettings/FontSelector";
import LanguageSelector from "../../components/UserSettings/LanguageSelector";
import csNodes from "../../reactflow/data/cs_flow_nodes";
import Overlay from "../../components/Overlay";

import "../../../css/builder.css";
import "../../../css/navbar.css";
import "../../../css/overlay.css";

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
  const label = "VisualDegree";

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

  const renderNavbar = () => {
    return (
      <Navbar id="builderNavbar" className="navbar">
        <h4 className="title">Degree Builder</h4>
        <div className="content">
          <div className="navbarItem selected">
            <span>Major</span>
          </div>
          <div className="navbarItem">GE</div>
          <div className="navbarItem">Catalog</div>
          <div className="navbarItem">My Semester</div>
        </div>
      </Navbar>
    );
  };

  const bannerContent = () => {
    return (
      <div style={{ alignItems: "center" }}>
        <h5
          id="bannerLabel"
          className="label"
          style={{
            padding: "10px",
            marginBottom: 0,
          }}>
          {label}
        </h5>
      </div>
    );
  };

  const sidebarContent = () => {
    return (
      <>
        <div id="sidebarContent" className="scrollbar-hidden">
          {degreeSelectBox()}
          {renderCourseListBox()}
        </div>
        {renderOptions()}
      </>
    );
  };

  return (
    <Overlay
      id="builderOverlay"
      {...props}
      navbar={renderNavbar()}
      bannerChildren={bannerContent()}
      sidebarChildren={sidebarContent()}>
      {props.children}
    </Overlay>
  );
};

export default DegreeBuilderOverlay;

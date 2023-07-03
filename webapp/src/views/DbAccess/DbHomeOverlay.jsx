import React, { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Courses from "../../components/DbAccessComponents/courseComponents/Courses";
import Programs from "../../components/DbAccessComponents/programComponents/Programs";
import Departments from "../../components/DbAccessComponents/departmentComponents/Departments";
import Schedules from "../../components/DbAccessComponents/scheduleComponents/Schedules";
import CoursesInDepartment from "../../components/DbAccessComponents/courseComponents/CoursesInDepartment";
import SSU_programs from "../../reactflow/data/SSU_programs";
import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/sidebar.css";
import "../../../css/DbAccessData.css";

const DhHomeOverlay = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showSchedules, setShowSchedules] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showProgramCourses, setShowProgramCourses] = useState(false);
  const [degreeName, setDegreeName] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrograms();
    handleNavOpen();
    window.addEventListener("resize", handleNavOpen);
    return () => {
      window.removeEventListener("resize", handleNavOpen);
    };
  }, []);

  const fetchPrograms = () => {
    try {
      setTimeout(() => {
        setPrograms(SSU_programs);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

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
    setShowPrograms(false);
    setShowDepartments(false);
    setShowSchedules(false);
    setShowProgramCourses(false);
  };

  const handleProgramsClick = () => {
    setShowCourses(false);
    setShowPrograms(true);
    setShowDepartments(false);
    setShowSchedules(false);
    setShowProgramCourses(false);
    setDegreeName("");
  };

  const handleDepartmentsClick = () => {
    setShowCourses(false);
    setShowPrograms(false);
    setShowDepartments(true);
    setShowSchedules(false);
    setShowProgramCourses(false);
  };

  const handleSchedulesClick = () => {
    setShowCourses(false);
    setShowPrograms(false);
    setShowDepartments(false);
    setShowSchedules(true);
    setShowProgramCourses(false);
  };

  const handleProgramCoursesClick = (programId, programName) => {
    setSelectedDegree(programId);
    setDegreeName(programName);
    setShowProgramCourses(true);
    setShowSchedules(false);
    setShowDepartments(false);
    setShowCourses(false);
    setShowPrograms(false);
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
            >
              {showProgramCourses}
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

  const handleDegreeSelect = (event) => {
    const degree = event.target.value;
    const programName =
      event.target.options[event.target.selectedIndex].text;
    handleProgramCoursesClick(degree, programName);
  };

  useEffect(() => {
    if (selectedDegree) {
      handleProgramCoursesClick(selectedDegree, degreeName);
    }
  }, [selectedDegree]);

  const degreeSelectBox = () => {
    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
        }}
      >
        <label htmlFor="degreeSelect">Select Program:</label>
        <select
          id="degreeSelect"
          value={selectedDegree}
          onChange={handleDegreeSelect}
        >
          <option value="">-- Select --</option>
          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div id="builderOverlay" className="builder-overlay">
      <Sidebar id="builderSidebar">{degreeSelectBox()}</Sidebar>
      {renderBanner()}
      {renderNavbar()}
      {showCourses && <Courses />}
      {showPrograms && <Programs />}
      {showDepartments && <Departments />}
      {showSchedules && <Schedules />}
      {showProgramCourses && (
        <CoursesInDepartment departmentId={selectedDegree} />
      )}
    </div>
  );
};

export default DhHomeOverlay;

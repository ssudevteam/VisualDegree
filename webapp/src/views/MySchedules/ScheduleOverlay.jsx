import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client"; // Import the missing useQuery hook
import Spinner from "../../components/Spinner";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Schedules from "../../components/DbAccessComponents/scheduleComponents/Schedules";
import ScheduleRow from "../../components/DbAccessComponents/scheduleComponents/ScheduleRow";
import { GET_SCHEDULES } from "../../client/queries/scheduleQueries";

import "../../../css/banner.css";
import "../../../css/navbar.css";
import "../../../css/sidebar.css";
import "../../../css/DbAccessData.css";

const ScheduleOverlay = () => {
  const { loading, error, data } = useQuery(GET_SCHEDULES); // Destructure the result of useQuery

  const [showSchedule, setShowSchedule] = useState(false);
  const [showSchedules, setShowSchedules] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [scheduleName, setScheduleName] = useState("");

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

  const handleScheduleClick = () => {
    setShowSchedule(true);
    setShowSchedules(false);
    setScheduleName("");
  };

  const handleSchedulesClick = (scheduleID, scheduleName) => {
    setSelectedSchedule(scheduleID);
    setScheduleName(scheduleName);
    setShowSchedules(true);
    setShowSchedule(false);
  };

  const renderBanner = () => {
    return (
      <Banner id="builderBanner" className="banner banner-sonoma">
        <h5>Schedules Dashboard</h5>
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
              {showSchedules}
            </h5>
            <h3 id="bannerDegreeName" style={{ marginTop: 0 }}>
              {scheduleName}
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
            <span className="navbarLink" onClick={handleSchedulesClick}>
              All Schedules
            </span>
          </div>
        </div>
      </Navbar>
    );
  };

  const handleScheduleSelect = (event) => {
    const schedule = event.target.value;
    const scheduleName = event.target.options[event.target.selectedIndex].text;
    handleSchedulesClick(schedule, scheduleName); // Correct the function name
  };

  useEffect(() => {
    if (selectedSchedule) {
      handleScheduleClick(selectedSchedule, scheduleName); // Correct the function name
    }
  }, [selectedSchedule]);

  const scheduleSelectBox = () => {
    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
        }}
      >
        <label htmlFor="ScheduleSelect">Select Schedule:</label>
        <select
          id="scheduleSelect"
          value={selectedSchedule}
          onChange={handleScheduleSelect}
        >
          <option value="">-- Select --</option>
          {data.schedules.map((schedule) => ( // Correct the variable name
            <option key={schedule.id} value={schedule.id}>
              {schedule.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Sidebar id="builderSidebar">{scheduleSelectBox()}</Sidebar>
      {renderBanner()}
      {renderNavbar()}
      {showSchedules && <Schedules />}
      {showSchedule && <ScheduleRow schedule={selectedSchedule} />}
    </>
  );
};

export default ScheduleOverlay;
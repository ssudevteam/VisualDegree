import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { Spinner } from "react-bootstrap";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PROGRAMS } from "../../client/queries/programQueries";
import { GET_COURSE } from "../../client/queries/courseQueries";
import { GET_SCHEDULES } from "../../client/queries/scheduleQueries";
import AddScheduleModal from "../../components/DbAccessComponents/scheduleComponents/AddScheduleModal";
import AddCourseToScheduleModal from "../../components/DbAccessComponents/courseComponents/AddCourseToScheduleModal";
import DropCourseFromScheduleModal from "../../components/DbAccessComponents/courseComponents/DropCourseFromSchedule";

import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";

import { FlowNodesContext } from "../../common/Contexts";
import { FlowNodeTypes } from "../../common/Types";

import "../../../css/builder.css";
import "../../../css/navbar.css";
import "../../../css/overlay.css";
import "../../../css/sidebar.css";

const ScheduleOverlay = ({ onSelectNode, onCenterView, ...props }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [programCourses, setProgramCourses] = useState([]);

  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [scheduleCourses, setScheduleCourses] = useState([]);

  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  const [addCoursesArray, setAddCoursesArray] = useState([]); // New state for storing selected courses to add to Schedule

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addNode, removeNode, createNode } = useContext(FlowNodesContext);
  const label = "VisualDegree";

  // Queries
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_PROGRAMS);
  const [
    queryCourseData,
    { loading: courseLoading, error: courseError, data: courseData },
  ] = useLazyQuery(GET_COURSE);
  const {
    loading: scheduleLoading,
    error: scheduleError,
    data: scheduleData,
  } = useQuery(GET_SCHEDULES);

  useEffect(() => {
    if (queryData) {
      const programs = [...queryData.programs].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPrograms(programs);
      setLoading(queryLoading);
    }
    if (queryError) {
      setError(queryError);
      setLoading(queryLoading);
    }
  }, [queryData, queryError, queryLoading]);

  useEffect(() => {
    if (!queryLoading && !scheduleLoading && queryData && scheduleData) {
      const schedules = [...scheduleData.schedules].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSchedules(schedules);
      setLoading(scheduleLoading);
    }
    if (scheduleError) {
      setError(scheduleError);
      setLoading(scheduleLoading);
    }
  }, [
    queryData,
    queryError,
    queryLoading,
    scheduleData,
    scheduleError,
    scheduleLoading,
  ]);

  const handleProgramSelection = async (selection) => {
    let program = selection.value;
    setSelectedProgram(program);

    if (program && program.courses) {
      setLoading(true);

      const courses = [];
      for (const course of program.courses) {
        try {
          const { data } = await queryCourseData({
            variables: {
              id: course.id,
            },
          });
          courses.push(data.course);
        } catch (error) {
          console.error(`Error loading Courses: ${error}`);
        }
      }

      if (courses.length > 0) {
        courses.sort((a, b) =>
          `${a.prefix + a.code}`.localeCompare(`${b.prefix + b.code}`)
        );
        setProgramCourses(courses);
      } else {
        setProgramCourses([]);
      }

      setLoading(false);
    }
  };

  const handleCourseSelection = (event) => {
    const courseButton = event.target;
    const courseId = courseButton.dataset.courseid;

    const course = programCourses.find((course) => course.id === courseId);
    if (!course) {
      console.log(`Error: Course ${courseId} not found`);
      return;
    }

    const toggleButton = (button) => {
      button.classList.toggle("button-select");
      setSelectedCourseForModal(course); // Set the selected course for the modal
    };

    if (!courseButton.classList.contains("button-select")) {
      const newNode = createNode({
        id: course.id,
        type: FlowNodeTypes.Course,
        data: course,
      });
      addNode(newNode);
      onSelectNode(newNode);
      newNode.data.eventListener.add("close", toggleButton, [courseButton]);

      // Add the selected course to the addCoursesArray
      setAddCoursesArray((prevCourses) => [...prevCourses, course]);
    } else {
      removeNode(course);
      // Remove the course from the addCoursesArray
      setAddCoursesArray((prevCourses) =>
        prevCourses.filter((c) => c.id !== course.id)
      );
    }
    toggleButton(courseButton);
  };

  const handleScheduleSelection = async (selection) => {
    const schedule = selection.value;
    setSelectedSchedule(schedule);

    if (schedule && schedule.courses) {
      setLoading(true);

      const courses = [];
      for (const course of schedule.courses) {
        try {
          const { data } = await queryCourseData({
            variables: {
              id: course.id,
            },
          });
          courses.push(data.course);
        } catch (error) {
          console.error(`Error loading Courses: ${error}`);
        }
      }

      if (courses.length > 0) {
        courses.sort((a, b) =>
          `${a.prefix + a.code}`.localeCompare(`${b.prefix + b.code}`)
        );
        setScheduleCourses(courses);
      } else {
        setScheduleCourses([]);
      }

      setLoading(false);
    }
  };

  const handleScheduleCourseSelection = (event) => {
    const courseButton = event.target;
    const courseId = courseButton.dataset.courseid;

    const course = (scheduleCourses || []).find(
      (course) => course.id === courseId
    );
    if (!course) {
      console.log(`Error: Course ${courseId} not found`);
      return;
    }

    const toggleButton = (button) => {
      button.classList.toggle("button-select");
    };

    if (!courseButton.classList.contains("button-select")) {
      const newNode = createNode({
        id: course.id,
        type: FlowNodeTypes.Course,
        data: course,
      });
      addNode(newNode);
      onSelectNode(newNode);
      newNode.data.eventListener.add("close", toggleButton, [courseButton]);

      // Add the selected course to the addCoursesArray
      setAddCoursesArray((prevCourses) => [...prevCourses, course]);
    } else {
      removeNode(course);

      // Remove the course from the addCoursesArray
      setAddCoursesArray((prevCourses) =>
        prevCourses.filter((c) => c.id !== course.id)
      );
    }
    toggleButton(courseButton);
  };

  const renderProgramSelectBox = () => {
    const options = programs.map((program) => ({
      value: program,
      label: program.name,
    }));

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
          maxWidth: "100%",
        }}>
        <label htmlFor="programSelect">Select Degree Program:</label>
        {loading ? (
          <Spinner />
        ) : (
          <Select
            id="programSelectBox"
            onChange={handleProgramSelection}
            options={options}
            value={selectedProgram ? { label: selectedProgram.name } : null}
          />
        )}
      </div>
    );
  };

  const renderCourseListBox = () => {
    if (!programCourses || programCourses.length === 0) {
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
            maxHeight: "100%",
          }}>
          {programCourses.map((course) => (
            <button
              key={course.id}
              data-courseid={course.id}
              className="builder-sidebar-button"
              onClick={handleCourseSelection}>
              {`${course.prefix} ${course.code}`}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderScheduleSelectBox = () => {
    const options = schedules.map((schedule) => ({
      value: schedule,
      label: schedule.name,
    }));

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div
        style={{
          display: "grid",
          paddingBottom: "10px",
          borderBottom: "ridge",
          maxWidth: "100%",
        }}>
        <label htmlFor="scheduleSelect">Select Schedule:</label>
        {loading ? (
          <Spinner />
        ) : (
          <Select
            id="scheduleSelectBox"
            onChange={handleScheduleSelection}
            options={options}
            value={selectedSchedule ? { label: selectedSchedule.name } : null}
          />
        )}
      </div>
    );
  };

  const renderScheduleCoursesListBox = () => {
    if (!scheduleCourses || scheduleCourses.length === 0) {
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
            maxHeight: "100%",
          }}>
          {scheduleCourses.map((course) => (
            <button
              key={course.id}
              data-courseid={course.id}
              className="builder-sidebar-button"
              onClick={handleScheduleCourseSelection}>
              {`${course.prefix} ${course.code}`}
            </button>
          ))}
        </div>
      </div>
    );
  };

  function updateSchedule(scheduleID, newCourses) {
    const updateSchedules = schedules.map((schedule) => {
      if (scheduleID == schedule.id) {
        return { ...schedule, courses: newCourses };
      }

      return schedule;
    });
    setSchedules(updateSchedules);
  }

  const renderNavbar = () => {
    return (
      <Navbar id="builderNavbar" className="navbar">
        <h4 className="title">Schedule Builder</h4>
        <div className="content">
          <AddScheduleModal />
          <AddCourseToScheduleModal courses={addCoursesArray} />
          <DropCourseFromScheduleModal updateSchedule={updateSchedule} />
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
          {renderProgramSelectBox()}
          {renderCourseListBox()}
          {renderScheduleSelectBox()}
          {renderScheduleCoursesListBox()}
        </div>
      </>
    );
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Overlay
      id="builderOverlay"
      navbar={renderNavbar()}
      bannerChildren={bannerContent()}
      sidebarProps={{
        className: "sidebar sidebar-card scrollbar-thin",
      }}
      sidebarChildren={sidebarContent()}
      {...props}>
      {props.children}
    </Overlay>
  );
};

export default ScheduleOverlay;

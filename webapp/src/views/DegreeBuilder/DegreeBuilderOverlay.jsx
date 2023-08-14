import React, {useState, useEffect, useContext} from "react";
import Select from "react-select";
import {Spinner} from "react-bootstrap";
import button from "bootstrap/js/src/button";

import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PROGRAMS} from "../../graphql/queries/program";
import {GET_COURSE} from "../../graphql/queries/course";

import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import FontSelector from "../../components/UserSettings/FontSelector";
import LanguageSelector from "../../components/UserSettings/LanguageSelector";

import {FlowNodesContext} from "../../common/Contexts";
import {FlowNodeTypes} from "../../common/Types";

import "../../../css/builder.css";
import "../../../css/navbar.css";
import "../../../css/overlay.css";
import "../../../css/sidebar.css";

const DegreeBuilderOverlay = ({onSelectNode, onCenterView, ...props}) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [programCourses, setProgramCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {nodes, setNodes, addNode, removeNode, createNode} =
    useContext(FlowNodesContext);
  const label = "VisualDegree";

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_PROGRAMS);

  const [queryCourseData, {}] = useLazyQuery(GET_COURSE);

  useEffect(() => {
    if (queryData) {
      const programs = [...queryData.programs].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      setPrograms(programs);
      setLoading(queryLoading);
    }
    if (queryError) {
      setError(queryError);
      setLoading(queryLoading);
    }
  }, [queryData, queryError, queryLoading]);

  const addCloseEvent = (node) => {
    node.data.eventListener.add("close", toggleCourseNode, [
      `button_${node.data.id}`,
    ]);
  };

  const handleProgramSelection = async (selection) => {
    let program = selection.value;
    setSelectedProgram(program);

    if (program && program.courses) {
      setLoading(true);

      const courses = [];
      for (const course of program.courses) {
        try {
          const {data} = await queryCourseData({
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
        courses.sort((a, b) => {
          return `${a.prefix + a.code}`.localeCompare(`${b.prefix + b.code}`);
        });
        setProgramCourses(courses);
      } else {
        setProgramCourses(null);
      }
      setLoading(false);
    }
  };

  const renderProgramSelectBox = () => {
    const options = [];

    programs.map((program) =>
      options.push({
        value: program,
        label: program.name,
      })
    );

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
          <Spinner/>
        ) : (
          <Select
            id="programSelectBox"
            onChange={handleProgramSelection}
            options={options}
            value={selectedProgram ? {label: selectedProgram.name} : null}
          />
        )}
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
        <h4 style={{paddingLeft: "10px"}}>Courses</h4>
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
          {programCourses?.map((course) => (
            <button
              id={`button_${course.id}`}
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

  const toggleCourseNode = (buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.toggle("button-select");
    } else {
      console.error(`Error: Button with id '${buttonId}' not found`);
    }
  };

  const handleCourseSelection = (event) => {
    const courseButton = event.target;
    const courseId = courseButton.dataset.courseid;

    const course = programCourses.find((course) => course.id === courseId);
    if (!course) {
      console.error(`Error: Course ${courseId} not found`);
      return;
    }

    if (!courseButton.classList.contains("button-select")) {
      const newNode = createNode({
        id: course.id,
        type: FlowNodeTypes.Course,
        data: course,
      });
      addNode(newNode);
      onSelectNode(newNode);
      addCloseEvent(newNode);
    } else {
      removeNode(course);
    }
    toggleCourseNode(courseButton.id);
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
      <div style={{alignItems: "center"}}>
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
        </div>
        {renderOptions()}
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

export default DegreeBuilderOverlay;

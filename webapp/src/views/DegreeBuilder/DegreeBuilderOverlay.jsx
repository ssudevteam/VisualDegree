import React, { useState, useEffect } from "react";
import Select from "react-select";
import Navbar from "../../components/Navbar";
import FontSelector from "../../components/UserSettings/FontSelector";
import LanguageSelector from "../../components/UserSettings/LanguageSelector";
import Overlay from "../../components/Overlay";

import "../../../css/builder.css";
import "../../../css/navbar.css";
import "../../../css/overlay.css";
import "../../../css/sidebar.css";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PROGRAM, GET_PROGRAMS } from "../../client/queries/programQueries";
import { Spinner } from "react-bootstrap";
import { GET_COURSE, GET_COURSES } from "../../client/queries/courseQueries";

const DegreeBuilderOverlay = (props) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [programCourses, setProgramCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const degreeSelectBox = () => {
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
          <Spinner />
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
          {programCourses?.map((course) => (
            <button
              key={course.id}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "ridge",
              }}>
              {`${course.prefix} ${course.code}`}
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Overlay
      id="builderOverlay"
      {...props}
      navbar={renderNavbar()}
      bannerChildren={bannerContent()}
      sidebarProps={{
        className: "sidebar sidebar-card scrollbar-thin",
      }}
      sidebarChildren={sidebarContent()}>
      {props.children}
    </Overlay>
  );
};
export default DegreeBuilderOverlay;

import React, { useState, useRef, useEffect } from "react";
import Fuse from "fuse.js";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper imports

// CSS
import "swiper/css"; // Swiper styles
import "../../../css/onboarding.css"; // custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

// DB QUERIES
import { GET_PROGRAMS_BY_PROGRAM_TYPE } from "../../graphql/queries/program";
import { GET_COURSES_BY_PROGRAM } from "../../graphql/queries/program";

const OnboardingPage = () => {
  const [name, setName] = useState("");
  const [degrees, setDegrees] = useState([""]);
  // for fuzzy search
  const [major, setMajor] = useState("");
  const [majorID, setMajorID] = useState("");
  const [majorSearch, setMajorSearch] = useState("");
  const [majorResults, setMajorResults] = useState([]);

  const fuse = useRef(null); // Using useRef to avoid recreating Fuse instance on every <render />
  const swiperRef = useRef(null);

  const {
    loading: programsLoading,
    error: programsError,
    data: programsData,
  } = useQuery(GET_PROGRAMS_BY_PROGRAM_TYPE, {
    variables: {
      type_id: "64796e0ad4ea07c70ad09fee", //id for "major"
    },
  });

  const {
    loading: coursesLoading,
    error: coursesError,
    data: coursesData,
  } = useQuery(GET_COURSES_BY_PROGRAM, {
    variables: {
      programId: majorID,
    },
    skip: !majorID,
  });

  const majors = programsData?.programsByProgramType.map(
    (program) => program.name
  );

  useEffect(() => {
    if (majors) {
      // only initialize Fuse if majors is defined and not empty
      fuse.current = new Fuse(majors, {
        includeScore: true,
        threshold: 0.3,
        keys: ["name"],
      });
    }
  }, [majors]);

  useEffect(() => {
    if (programsData && major) {
      const matchedProgram = programsData.programsByProgramType.find(
        (program) => program.name === major
      );
      if (matchedProgram) {
        setMajorID(matchedProgram.id);
      }
    }
  }, [major, programsData]);
  console.log(majorID);
  const handleSearch = (e) => {
    const results = fuse.current.search(e.target.value);
    setMajorResults(results.map((result) => result.item));
  };

  const handleDegreeChange = (index, value) => {
    const newDegrees = [...degrees];
    newDegrees[index] = value;
    setDegrees(newDegrees);
  };

  const addDegree = () => {
    setDegrees([...degrees, ""]);
  };

  // State to track the highlighted result
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleMajorKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        // Navigate down the list, but don't go past the last item
        setHighlightedIndex((prevIndex) =>
          Math.min(prevIndex + 1, majorResults.length - 1)
        );
        e.preventDefault(); // Prevent cursor movement in the input
        break;

      case "ArrowUp":
        // Navigate up the list, but don't go past the first item
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        e.preventDefault(); // Prevent cursor movement in the input
        break;

      case "Enter":
        // If we have results being displayed and a highlighted index is selected
        if (majorResults.length > 0 && highlightedIndex >= 0) {
          const selectedMajor = majorResults[highlightedIndex];
          setMajor(selectedMajor);
          setMajorSearch(selectedMajor);
          setMajorResults([]);
          setHighlightedIndex(-1); // Reset the highlighted index
        }
        // If there are results but no highlighted index, select the top choice
        else if (majorResults.length > 0 && highlightedIndex === -1) {
          const topChoice = majorResults[0];
          setMajor(topChoice);
          setMajorSearch(topChoice);
          setMajorResults([]);
        }
        // If no results are being displayed, and the current major is valid
        else if (!majorResults.length && majors.includes(major)) {
          swiperRef.current.swiper.slideNext();
        }
        break;

      default:
        break;
    }
  };

  console.log(coursesData);

  return (
    <div className="container mt-5 mb-5 onboarding-main">
      <h2>Welcome to Visual Degree!</h2>

      <Swiper
        ref={swiperRef}
        className="mt-4"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <div className="slideBody">
            <label htmlFor="name">Name:</label>
            <p className="onboarding-field-desc">
              Write the name you'd like to use on the app
            </p>
            <input
              type="text"
              className="form-control onboarding-form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <div>
              <label htmlFor="name">Major:</label>
              <input
                type="text"
                className="form-control onboarding-form-control"
                id="major"
                value={majorSearch}
                onChange={(e) => {
                  handleSearch(e);
                  setMajorSearch(e.target.value);
                }}
                onKeyDown={handleMajorKeyDown}
                placeholder="Enter your major"
              />
              {majorResults.length > 0 && (
                <ul
                  className="dropdown-menu show"
                  style={{
                    display: "block",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}>
                  {majorResults.map((maj, mIndex) => (
                    <li
                      key={mIndex}
                      className={`dropdown-item ${
                        mIndex === highlightedIndex ? "highlighted" : ""
                      }`}
                      onMouseEnter={() => setHighlightedIndex(mIndex)}
                      onClick={() => {
                        setMajor(maj);
                        setMajorSearch(maj);
                        setMajorResults([]);
                        setHighlightedIndex(-1);
                      }}>
                      {maj}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {degrees.slice(1).map((degree, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`degree-${index + 1}`}>
                  Degree {index + 2}
                </label>
                <input
                  type="text"
                  className="form-control onboarding-form-control"
                  id={`degree-${index + 1}`}
                  value={degree}
                  onChange={(e) =>
                    handleDegreeChange(index + 1, e.target.value)
                  }
                  placeholder="Enter major/minor"
                />
              </div>
            ))}

            <a className="add-degree" onClick={addDegree}>
              Add another degree
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideBody">
            {/* <h4>Preview of Your Department's DegreeView</h4>
            <div id="degreePreview" className="p-3 border">
              Preview will appear here based on selected degrees...
            </div> */}

            <h4 className="mt-4">Select the classes you've taken:</h4>
            {coursesData &&
              coursesData.program &&
              coursesData.program.courses &&
              [...coursesData.program.courses]
                .sort((a, b) => parseInt(a.code) - parseInt(b.code))
                .map((course) => (
                  <div className="form-check" key={course.code}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={course.title}
                      id={`class-${course.code}`}
                      onChange={(e) =>
                        handleCourseChange(course.code, e.target.checked)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`class-${course.code}`}>
                      {course.code}: {course.title}
                    </label>
                  </div>
                ))}
            <button className="btn btn-success mt-4">Submit</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnboardingPage;

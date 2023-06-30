import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import CourseRow from "../courseComponents/CourseRow";
import "../../../../css/DbAccessData.css"; // Update the CSS file path

const CoursesInDepartment = ({ departmentId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/course/${departmentId}`);
        if (!response.ok) {
          throw new Error("Error fetching course");
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const handleButtonClick = (courseId) => {
    console.log("Button clicked for course ID:", courseId);
  };

  return (
    <div className="table-container">
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Number of Units</th>
            <th>Code</th>
            <th>GE Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <CourseRow
              key={course.id}
              course={course}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesInDepartment;

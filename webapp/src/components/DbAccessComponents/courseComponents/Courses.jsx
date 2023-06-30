import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import CourseRow from "../courseComponents/CourseRow";
import "../../../../css/DbAccessData.css"; // Update the CSS file path

const Courses = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching courses");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

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
            <CourseRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;

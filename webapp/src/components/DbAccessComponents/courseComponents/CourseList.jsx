import React from "react";

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course._id}>
          <h5>{course.header}</h5>
          <p>
            <strong>Description:</strong>{" "}
            <span style={{ whiteSpace: "pre-wrap" }}>{course.description}</span>
          </p>
          <p>
            <strong>GE Category:</strong>{" "}
            {course.ge_category ? course.ge_category : "N/A"}
          </p>
          <p>
            <strong>Prerequisites:</strong>{" "}
            {course.prerequisites ? course.prerequisites : "N/A"}
          </p>
          <p>
            <strong>Number of Units:</strong> {course.num_units}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;

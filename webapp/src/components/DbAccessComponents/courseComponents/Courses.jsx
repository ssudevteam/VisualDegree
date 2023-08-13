import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import CourseRow from "../courseComponents/CourseRow";
import { GET_COURSES } from "../../../graphql/queries/course";
import "../../../../css/DbAccessData.css"; // Update the CSS file path

const Courses = () => {
  const { loading, error, data } = useQuery(GET_COURSES);

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
          {data.courses.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;

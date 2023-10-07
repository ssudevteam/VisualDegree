import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../Widgets/Spinner";
import CourseRow from "./CourseRow";
import { GET_COURSES_BY_DEPARTMENT } from "../../graphql/queries/course";
import "../../../../css/DbAccessData.css";

const CoursesInDepartment = ({ departmentId }) => {
  const { loading, error, data } = useQuery(GET_COURSES_BY_DEPARTMENT, {
    variables: { departmentId },
  });

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
          {data.coursesByDepartment.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesInDepartment;

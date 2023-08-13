import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import DepartmentRow from "./DepartmentRow";
import { GET_DEPARTMENTS } from "../../../graphql/queries/department";
import "../../../../css/DbAccessData.css";

const Departments = () => {
  const { loading, error, data } = useQuery(GET_DEPARTMENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="table-container">
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {data.departments.map((department) => (
            <DepartmentRow key={department.id} department={department} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;

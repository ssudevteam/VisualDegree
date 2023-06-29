import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import DepartmentRow from "./DepartmentRow";
import "../../../../css/DbAccessData.css"; // Update the CSS file path

const Departments = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departments, setdepartments] = useState([]);

  useEffect(() => {
    fetch("/api/departments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching departments");
        }
        return response.json();
      })
      .then((data) => {
        setdepartments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const handleButtonClick = (departmentId) => {
    console.log("Button clicked for department ID:", departmentId);
  };

  return (
    <div className="table-container">
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <DepartmentRow
              key={department.id}
              department={department}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;

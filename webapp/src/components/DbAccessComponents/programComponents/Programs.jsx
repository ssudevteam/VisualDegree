import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import ProgramRow from "./ProgramRow";
import "../../../../css/DbAccessData.css";

const Programs = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [programs, setprograms] = useState([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching programs");
        }
        return response.json();
      })
      .then((data) => {
        setprograms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
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
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <ProgramRow key={program.id} program={program} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Programs;

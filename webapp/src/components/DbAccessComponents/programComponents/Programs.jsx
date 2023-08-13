import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import ProgramRow from "./ProgramRow";
import { GET_PROGRAMS } from "../../../graphql/queries/program";
import "../../../../css/DbAccessData.css";

const Programs = () => {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="table-container">
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.programs.map((program) => (
            <ProgramRow key={program.id} program={program} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Programs;

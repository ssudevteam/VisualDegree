import React from "react";
import { useQuery } from "@apollo/client";
import Spinner from "../../Spinner";
import ScheduleRow from "../scheduleComponents/ScheduleRow";
import { GET_SCHEDULES } from "../../../graphql/queries/schedule";
import "../../../../css/DbAccessData.css";
import AddScheduleModal from "./AddScheduleModal";

const Schedules = () => {
  const { loading, error, data } = useQuery(GET_SCHEDULES);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <AddScheduleModal />
      <div className="table-container">
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.schedules.map((schedule) => (
              <ScheduleRow key={schedule.id} schedule={schedule} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Schedules;

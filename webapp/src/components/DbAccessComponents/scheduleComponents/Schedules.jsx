import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import ScheduleRow from "./ScheduleRow";
import "../../../../css/DbAccessData.css";

const Schedules = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch("/api/schedules")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching schedules");
        }
        return response.json();
      })
      .then((data) => {
        setSchedules(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
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
          {schedules.map((schedule) => (
            <ScheduleRow key={schedule.id} schedule={schedule} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedules;

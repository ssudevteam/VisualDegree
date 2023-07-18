import React, { useState } from "react";
import CourseList from "../courseComponents/CourseList";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_SCHEDULE } from "../../../client/mutations/scheduleMutations";
import { GET_SCHEDULES } from "../../../client/queries/scheduleQueries";

const ScheduleRow = ({ schedule }) => {
  const [dropDownListOpen, setDropDownListOpen] = useState(false);
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE, {
    variables: { id: schedule.id },
    update(cache, { data: { deleteSchedule } }) {
      const { schedules } = cache.readQuery({ query: GET_SCHEDULES });
      cache.writeQuery({
        query: GET_SCHEDULES,
        data: {
          schedules: schedules.filter(
            (schedule) => schedule.id !== deleteSchedule.id
          ),
        },
      });
    },
  });

  const toggleDropDownList = () => {
    setDropDownListOpen(!dropDownListOpen);
  };

  return (
    <>
      <tr onClick={toggleDropDownList}>
        <td>{schedule.name}</td>
      </tr>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteSchedule}>
          <FaTrash />
        </button>
      </td>
      {dropDownListOpen && (
        <tr>
          <td colSpan="1">
            <CourseList courses={schedule.courses} />
          </td>
        </tr>
      )}
    </>
  );
};

export default ScheduleRow;

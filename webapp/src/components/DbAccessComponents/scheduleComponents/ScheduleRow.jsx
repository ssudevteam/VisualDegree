import React, { useState } from "react";
import CourseList from "../courseComponents/CourseList";

const ScheduleRow = ({ schedule }) => {
  const [dropDownListOpen, setDropDownListOpen] = useState(false);

  const toggleDropDownList = () => {
    setDropDownListOpen(!dropDownListOpen);
  };

  return (
    <>
      <tr onClick={toggleDropDownList}>
        <td>{schedule.name}</td>
      </tr>
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

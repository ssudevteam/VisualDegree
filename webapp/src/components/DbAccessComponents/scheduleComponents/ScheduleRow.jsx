import React, { useState } from "react";

const ScheduleRow = ({ schedule, handleButtonClick }) => {
  const [dropDownListOpen, setDropDownListOpen] = useState(false);

  const openDropDownList = () => {
    setDropDownListOpen(true);
  };

  const closeDropDownList = () => {
    setDropDownListOpen(false);
  };

  return (
    <>
      <tr>
        <td>{schedule.name}</td>
      </tr>
    </>
  );
};

export default ScheduleRow;

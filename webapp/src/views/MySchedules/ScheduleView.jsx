import React, { useEffect } from "react";
import { setWindowTitle } from "../../../../utils/html";
import ScheduleOverlay from "./ScheduleOverlay";

const ScheduleView = () => {
  useEffect(() => {
    setWindowTitle("VisualDegree | My Schedules");
  }, []);

  return (
    <div
      id="builderView"
      className="builder-view"
      style={{
        backgroundColor: "whitesmoke",
      }}>
      <ScheduleOverlay />
    </div>
  );
};

export default ScheduleView;

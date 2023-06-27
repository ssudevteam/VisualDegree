import React, { useEffect } from "react";
import { setWindowTitle } from "../../../../utils/html";
import DbHomeOverlay from "./DbHomeOverlay";

const DbHomeView = () => {
  useEffect(() => {
    setWindowTitle("VisualDegree | Db_Access");
  }, []);

  return (
    <div>
      <DbHomeOverlay />
    </div>
  );
};

export default DbHomeView;

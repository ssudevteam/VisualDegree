import React, { useEffect, useState } from "react";
import { setWindowTitle } from "../../../../utils/html";
import ScheduleOverlay from "./ScheduleOverlay";

import FlowCanvas from "../../components/FlowCanvas/FlowCanvas";
import FlowNodesContextProvider from "../../components/Providers/FlowContextProvider";

const ScheduleView = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    setWindowTitle("VisualSchedule | ScheduleBuilder");
  }, []);

  const handleSelectNode = (node) => {
    setSelectedNode(node);
  };

  return (
    <div
      id="builderView"
      className="builder-view"
      style={{
        backgroundColor: "whitesmoke",
      }}>
      <FlowNodesContextProvider>
        <ScheduleOverlay onSelectNode={handleSelectNode}>
          <FlowCanvas selectNode={selectedNode} />
        </ScheduleOverlay>
      </FlowNodesContextProvider>
    </div>
  );
};

export default ScheduleView;

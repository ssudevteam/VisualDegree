import React, { useEffect, useState } from "react";

import DegreeBuilderOverlay from "./DegreeBuilderOverlay";

import FlowCanvas from "../../components/FlowCanvas/FlowCanvas";
import FlowNodesContextProvider from "../../components/Providers/FlowContextProvider";

import { setWindowTitle } from "../../../../utils/html";

const DegreeBuilderView = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    setWindowTitle("VisualDegree | DegreeBuilder");
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
        <DegreeBuilderOverlay onSelectNode={handleSelectNode}>
          <FlowCanvas selectNode={selectedNode} />
        </DegreeBuilderOverlay>
      </FlowNodesContextProvider>
    </div>
  );
};

export default DegreeBuilderView;

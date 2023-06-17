import React, { useState, useContext } from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";
import { Handle, Position, useStore } from "reactflow";
import "../../reactflow/floating_edges/style.css";
import "../../../css/customNodes.css";
import ModeContext from "../FlowContexts/ModeContext";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const CourseNode = ({ data, isConnectable }) => {
  const [showPopover, setShowPopover] = useState(false);
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isConnecting = !!connectionNodeId;
  const { mode } = useContext(ModeContext);

  // refactor to useEffect
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "escape" || event.code === "27") {
      handleClosePopover();
    }
  });

  const handleNodeClick = () => {
    if (mode !== "move") {
      setShowPopover(!showPopover);
    }
  };

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  const popover = (
    <Popover id="course-popover" className="custom-popover">
      <Popover.Header className="custom-popover-header">
        <div className="custom-popover-title">{data.label}</div>
        <Button
          variant="link"
          className="custom-popover-close"
          onClick={handleClosePopover}
        >
          <span className="custom-popover-close-icon">X</span>
        </Button>
      </Popover.Header>
      <Popover.Body className="custom-popover-body">
        <div>{data.desc}</div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      {!isConnecting && (
        <Handle
          type="source"
          position={Position.Right}
          className="courseHandle"
          id="a" // does this mean all the handles have the same Ids?
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
      )}
      <Handle
        type="target"
        position={Position.Left}
        className="courseHandle"
        isConnectable={isConnectable}
        isConnectableStart={false}
      />

      <div
        className="node-wrapper"
        onClick={handleNodeClick}
        style={{
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px",
          cursor: "pointer",
          width: "140px",
        }}
      >
        <div
          className="node-label"
          style={{
            marginBottom: "4px",
          }}
        >
          {data.label}
        </div>
      </div>
      <OverlayTrigger
        trigger="click"
        placement="auto"
        show={showPopover}
        onHide={handleClosePopover}
        overlay={popover}
      >
        <div />
      </OverlayTrigger>
    </>
  );
};

export default CourseNode;

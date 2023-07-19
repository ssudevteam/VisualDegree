// @ts-ignore
import React, { useEffect, useState } from "react";
import { Handle, Position, useStore } from "reactflow";

import { FlowNode } from "../../common/Types";

import "../../reactflow/floating_edges/style.css";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const FlowNodeFC: React.FC<{ show: boolean } & FlowNode> = ({
  onClick,
  show,
  ...props
}) => {
  const { id, data, isConnectable } = props;
  const { eventListener } = data;

  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isConnecting = !!connectionNodeId;
  const [isClosed, setIsClosed] = useState(!show);

  const notifyListeners = (eventName: string) => {
    if (eventListener && isClosed) {
      eventListener.notifyAll(eventName);
    }
  };

  useEffect(() => {
    if (!show) {
      setIsClosed(true);
      notifyListeners("close");
    }
  }, [show, setIsClosed, eventListener, notifyListeners]);

  return (
    <>
      {!isConnecting && (
        <Handle
          type="source"
          position={Position.Right}
          className="flowNodeHandle"
          id={`source_${id}`}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
      )}
      <Handle
        type="target"
        position={Position.Left}
        className="flowNodeHandle"
        id={`target_${id}`}
        isConnectable={isConnectable}
        isConnectableStart={false}
      />
      <div
        id={id}
        className="node-wrapper"
        onClick={onClick}
        style={{
          background: "white",
          border: "1px solid black",
          borderRadius: "8px",
          cursor: "pointer",
          width: "140px",
          overflow: "hidden",
        }}>
        {props.children}
      </div>
    </>
  );
};

export default FlowNodeFC;

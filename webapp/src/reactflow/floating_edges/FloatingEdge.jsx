import React, { useCallback, useContext, useState } from "react";
import {
  useStore,
  getBezierPath,
  BaseEdge,
  EdgeLabelRenderer,
} from "reactflow";

import { getEdgeParams } from "./utils.jsx";
import { FlowNodesContext } from "../../common/Contexts";

const FloatingEdge = ({ id, source, target, markerEnd, style, selected }) => {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  const { removeNodeEdge } = useContext(FlowNodesContext);

  const onEdgeClose = useCallback(
    (event, id) => {
      event.stopPropagation();
      removeNodeEdge(null, id);
    },
    [removeNodeEdge]
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        interactionWidth={30}
        style={style}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "all",
          }}
          className="nodrag nopan">
          {selected && (
            <button
              className="edgebutton"
              style={{
                borderRadius: "25px",
                color: "red",
                backgroundColor: "white",
              }}
              onClick={(event) => onEdgeClose(event, id)}>
              X
            </button>
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default FloatingEdge;

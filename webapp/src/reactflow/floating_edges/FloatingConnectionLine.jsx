import React from "react";
import { getBezierPath } from "reactflow";

const FloatingConnectionLine = ({
  fromX,
  fromY,
  fromPosition,
  fromNode,
  toX,
  toY,
  toPosition,
  connectionLineType,
  connectionLineStyle,
}) => {
  if (!fromNode) {
    return null;
  }

  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetPosition: toPosition,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path
        style={connectionLineStyle}
        type={connectionLineType}
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        className="animated"
        d={edgePath}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="black"
        r={3}
        stroke="black"
        strokeWidth={1.5}
      />
    </g>
  );
};

export default FloatingConnectionLine;

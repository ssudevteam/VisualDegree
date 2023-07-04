import React, { useState, useCallback, forwardRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  MarkerType,
  Background,
  Controls,
  SelectionMode,
} from "reactflow";
import "reactflow/dist/style.css";
import CourseNode from "../FlowNodes/CourseNode";
import FlowButtonPanel from "./FlowButtonPanel";
import ModeContext from "../../components/FlowContexts/ModeContext";

import csNodes from "../../reactflow/data/cs_flow_nodes";
import FloatingEdge from "../../reactflow/floating_edges/FloatingEdge";
import FloatingConnectionLine from "../../reactflow/floating_edges/FloatingConnectionLine";
import ModeSelector from "../UserSettings/ModeSelector";

import "../../reactflow/floating_edges/style.css";
import "../../../css/flow.css";

// TODO
// I don't think floating edges is fully implemented

const getNodeId = () => `randomnode_${+new Date()}`; // for addNode function

const initialNodes = csNodes;
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "floating",
    label: "this is an edge label",
  },
];

const nodeTypes = {
  courseNode: CourseNode,
};
const edgeTypes = {
  floating: FloatingEdge,
};
console.log(csNodes);

const FlowCanvas = forwardRef((props, forwardRef) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(forwardRef);
  const [mode, setMode] = useState("move"); // Default mode

  const { setViewport } = useReactFlow();

  //   const onMouseMove = (event) => {
  //     if (mode === "select") {
  //       // Implement your custom selection box logic here
  //     }
  //   };

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: {
        label: "Added node",
      },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onCanvasChange = (flowObject) => {
    const updateCanvas = async () => {
      if (flowObject) {
        const { x = 0, y = 0, zoom = 1 } = flowObject.viewport;
        setNodes(flowObject.nodes || []);
        setEdges(flowObject.edges || []);
        setViewport({
          x,
          y,
          zoom,
        });
      }
    };

    updateCanvas().then();
  };

  return (
    <div id="flowCanvas" className="flow-canvas" {...props}>
      <ModeContext.Provider value={{ mode }}>
        <ModeSelector setMode={setMode} />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setRfInstance}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          connectionLineComponent={FloatingConnectionLine}
          nodesDraggable={mode === "move"} // Only allow dragging nodes in 'move' mode
          nodesConnectable={mode === "connect"} // Only allow connecting nodes in 'connect' mode
          connectionRadius={80}
          selectionMode={SelectionMode.Partial}
          // onPaneClick={(event) => mode === 'move' && onMouseMove(event)} // Custom behavior in 'move' mode
          // fitViewport={true}
        >
          <FlowButtonPanel
            onAddNode={onAdd}
            onChange={onCanvasChange}
            flowInstance={rfInstance}
          />
          <Controls
            position="bottom-right"
            style={{
              bottom: "15px",
              right: "-10px",
            }}
          />
          <Background size="1" />
        </ReactFlow>
      </ModeContext.Provider>
    </div>
  );
});

export default () => (
  <ReactFlowProvider>
    <FlowCanvas />
  </ReactFlowProvider>
);

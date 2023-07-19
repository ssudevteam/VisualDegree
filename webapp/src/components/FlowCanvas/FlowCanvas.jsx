import React, { useState, useCallback, useContext, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  Background,
  Controls,
  SelectionMode,
} from "reactflow";
import "reactflow/dist/style.css";

import FlowButtonPanel from "./FlowButtonPanel";
import { FlowNodesContext, SelectorModeContext } from "../../common/Contexts";

import FloatingConnectionLine from "../../reactflow/floating_edges/FloatingConnectionLine";
import ModeSelector from "../UserSettings/ModeSelector";
import {
  SelectorMode,
  CourseNodeType,
  FloatingEdgeType,
  FlowNodeTypes,
  DefaultEdgeOptions,
} from "../../common/Types";
import csNodes from "../../reactflow/data/cs_flow_nodes";

import "../../../css/flow.css";

// TODO
// I don't think floating edges is fully implemented

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

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

const FlowCanvas = ({ selectNode, ...props }) => {
  const { setViewport, setCenter, getZoom } = useReactFlow();
  const [rfInstance, setRfInstance] = useState(null);
  const [mode, setMode] = useState(SelectorMode.Move);
  const [selectedNode, setSelectedNode] = useState(null);

  const {
    createNode,
    addNode,
    removeNode,
    nodes,
    setNodes,
    onNodesChange,
    addNodeEdge,
    removeNodeEdge,
    edges,
    setEdges,
    onEdgesChange,
  } = useContext(FlowNodesContext);

  const handleNodeSelection = (node) => {
    if (selectedNode) {
      nodes.map((node) => {
        node.id === selectedNode.id ? (node.selected = false) : node;
      });
    }
    node.selected = true;
    setSelectedNode(node);
  };

  const handleCenterViewOnNode = (node) => {
    setCenter(node.position.x, node.position.y, {
      duration: 600,
      zoom: getZoom(),
    });
  };

  const selectNodeAndCenterView = (node) => {
    if (!node) return;
    handleNodeSelection(node);
    handleCenterViewOnNode(node);
  };

  useEffect(() => {
    selectNodeAndCenterView(selectNode);
  }, [selectNode]);

  const handleAddNode = useCallback(
    (newNode) => {
      if (!newNode) {
        newNode = createNode({
          data: {
            header: "Add Text Here",
          },
          type: FlowNodeTypes.Course,
        });
      }
      addNode(newNode);
      selectNodeAndCenterView(newNode);
    },
    [addNode, setCenter, createNode]
  );

  const onConnect = useCallback(
    (params) => addNodeEdge(params, edges),
    [addNodeEdge]
  );

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
      <SelectorModeContext.Provider value={mode}>
        <ModeSelector setMode={setMode} />
        <ReactFlow
          onLoad={setRfInstance}
          nodes={nodes}
          edges={edges}
          onInit={setRfInstance}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={CourseNodeType}
          edgeTypes={FloatingEdgeType}
          connectionLineComponent={FloatingConnectionLine}
          defaultEdgeOptions={DefaultEdgeOptions}
          connectionLineStyle={connectionLineStyle}
          nodesDraggable={mode === SelectorMode.Move} // Only allow dragging nodes in 'move' mode
          nodesConnectable={mode === SelectorMode.Connect} // Only allow connecting nodes in 'connect' mode
          connectionRadius={80}
          selectionMode={SelectionMode.Partial}
          // onPaneClick={(event) => mode === 'move' && onMouseMove(event)} // Custom behavior in 'move' mode
          // fitViewport={true}
        >
          <FlowButtonPanel
            onNodeAdd={(event) => handleAddNode(event.target.value)}
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
          <Background variant="lines" lineWidth="0.8" />
        </ReactFlow>
      </SelectorModeContext.Provider>
    </div>
  );
};

export default ({ selectNode, ...props }) => (
  <ReactFlowProvider>
    <FlowCanvas selectNode={selectNode} props={props} />
  </ReactFlowProvider>
);

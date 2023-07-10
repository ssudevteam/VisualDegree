import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
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

const getNodeId = () => `node_${+new Date()}`;

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
// console.log(csNodes);

const FlowCanvas = forwardRef((props, ref) => {
  const { setViewport } = useReactFlow();
  const [rfInstance, setRfInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [mode, setMode] = useState("move");

  const onConnect = useCallback(
    (params) => {
      if (!params) {
        return;
      }
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
      );
    },
    [setEdges]
  );

  const addNode = useCallback(
    (newNode) => {
      if (!newNode) {
        newNode = {
          data: {
            header: "Add Text Here",
          },
          type: "courseNode",
          position: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          },
        };
      }
      setNodes((prevNodes) => {
        if (!newNode.id) {
          newNode.id = getNodeId();
        }
        return [...prevNodes, newNode];
      });
    },
    [setNodes]
  );

  const removeNode = useCallback(
    (node) => {
      const index = nodes.findIndex((currNode) => {
        return currNode.id === node.id;
      });
      if (index !== -1) {
        setNodes([...nodes.slice(0, index), ...nodes.slice(index + 1)]);
      }
    },
    [nodes, setNodes]
  );

  const getLastNodePosition = () => {
    if (nodes.length === 0) {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }
    const node = nodes.at(nodes.length - 1);
    return { x: node.position.x, y: node.position.y };
  };

  useImperativeHandle(ref, () => ({
    addNode,
    removeNode,
    getLastNodePosition,
  }));

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
    <div id="flowCanvas" className="flow-canvas" ref={ref} {...props}>
      <ModeContext.Provider value={{ mode }}>
        <ModeSelector setMode={setMode} />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onInit={setRfInstance}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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
            onNodeAdd={(event) => addNode(event.target.value)}
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

export default forwardRef((props, ref) => (
  <ReactFlowProvider>
    <FlowCanvas ref={ref} props={props} />
  </ReactFlowProvider>
));

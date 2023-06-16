import React, {useState, useCallback, forwardRef} from "react";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    MarkerType,
    Background,
    Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import CourseNode from "../FlowNodes/CourseNode";
import FlowButtonPanel from "./FlowButtonPanel";

import csNodes from "../../reactflow/data/cs_flow_nodes";
import FloatingEdge from "../../reactflow/floating_edges/FloatingEdge";
import FloatingConnectionLine from "../../reactflow/floating_edges/FloatingConnectionLine.jsx";
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

const nodeTypes = {courseNode: CourseNode};
const edgeTypes = {floating: FloatingEdge};
console.log(csNodes);

const FlowCanvas = forwardRef((props, forwardRef) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [rfInstance, setRfInstance] = useState(forwardRef)
    const {setViewport} = useReactFlow();

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge(
                    {
                        ...params,
                        type: "floating",
                        markerEnd: {type: MarkerType.ArrowClosed},
                    },
                    eds
                )
            ),
        [setEdges]
    );

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: {label: "Added node"},
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
                const {x = 0, y = 0, zoom = 1} = flowObject.viewport;
                setNodes(flowObject.nodes || []);
                setEdges(flowObject.edges || []);
                setViewport({x, y, zoom});
            }
        };

        updateCanvas().then();
    }

    return (
        <div id='flowCanvas'
             className='flow-canvas'
             style={{
                 width: '100%',
                 height: '100vh',
                 backgroundColor: 'whitesmoke'
             }}
             {...props}
        >
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
                fitViewport={true}
            >
                <FlowButtonPanel onAddNode={onAdd}
                                 onChange={onCanvasChange}
                                 flowInstance={rfInstance}
                />
                <Controls/>
                <Background/>
            </ReactFlow>
        </div>
    );
});

export default () => (
    <ReactFlowProvider>
        <FlowCanvas/>
    </ReactFlowProvider>
);

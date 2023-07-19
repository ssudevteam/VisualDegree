// @ts-ignore
import React, { useEffect } from "react";
import {
  addEdge,
  Connection,
  Edge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import { EventListener } from "../../events/EventListener";

import { FlowNodesContext } from "../../common/Contexts";

import {
  FlowNode,
  FlowNodeProps,
  FlowNodesContextProps,
} from "../../common/Types";

const FlowNodesProvider: React.FC = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const getNodeId = (): string => `node_${+new Date()}`;

  const createNode = (props: FlowNodeProps): FlowNode => {
    let { id, type, xPos, yPos, data } = props;
    id = id ? id : getNodeId();
    if (!xPos || !yPos) {
      const position = getNextNodePosition();
      xPos = position.x;
      yPos = position.y;
    }
    return {
      id: id,
      type: type,
      position: {
        x: xPos,
        y: yPos,
      },
      data: {
        ...data,
        eventListener: new EventListener(),
      },
    };
  };

  const getNextNodePosition = () => {
    const dist = 7;
    const position = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    let xOffset = 0,
      yOffset = 0;
    let flip = false;

    // Move it a little, so it doesn't completely obscure any node below it
    nodes.forEach((node) => {
      if (
        node.position.x === position.x + xOffset &&
        node.position.y === position.y + yOffset
      ) {
        xOffset += dist;
        yOffset += flip ? dist : -dist;
        flip = !flip;
      }
    });
    return {
      x: position.x + xOffset,
      y: position.y + yOffset,
    };
  };

  const addNode = (node: FlowNode) => {
    if (!node) return;
    const handleCloseEvent = () => {
      removeNode(node);
    };
    node.data.eventListener.add("close", handleCloseEvent);
    setNodes((prevNodes) => prevNodes.concat(node));
  };

  const removeNode = (node: FlowNode) => {
    setNodes((prevNodes) => prevNodes.filter((nd) => nd.id !== node.id));
  };

  const addNodeEdge = (edgeParams: Edge | Connection, _edges: Edge[]) => {
    setEdges((prevEdges) =>
      addEdge(
        {
          ...edgeParams,
        },
        prevEdges
      )
    );
  };

  const removeNodeEdge = (edge: Edge | null, edgeId: string) => {
    const id = edge ? edge.id : edgeId;
    if (!id) return;
    setEdges((prevEdges) => prevEdges.filter((e) => e.id !== id));
  };

  const contextProps: FlowNodesContextProps = {
    nodes,
    setNodes,
    onNodesChange,
    addNode,
    removeNode,
    createNode,
    edges,
    setEdges,
    onEdgesChange,
    addNodeEdge,
    removeNodeEdge,
  };

  return (
    <FlowNodesContext.Provider value={contextProps}>
      {children}
    </FlowNodesContext.Provider>
  );
};

export default FlowNodesProvider;

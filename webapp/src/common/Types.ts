import {
  OnChange,
  NodeChange,
  Node,
  NodeProps,
  Edge,
  EdgeChange,
  Connection,
  MarkerType,
} from "reactflow";
import { EventListener } from "../events/EventListener";
import CourseNode from "../components/FlowNodes/CourseNode";
import FlowNode from "../components/FlowNodes/FlowNode";
import FloatingEdge from "../reactflow/floating_edges/FloatingEdge";

export interface EventHandler {
  type: string;
  listener: (...args: unknown[]) => void;
  deps?: unknown[];
}

export enum SelectorMode {
  Move = "move",
  Connect = "connect",
  Describe = "describe",
}

export type FlowNodesContextProps<T = any> = {
  nodes: Node<T>[];
  setNodes: React.Dispatch<React.SetStateAction<Node<T, string>[]>>;
  onNodesChange: OnChange<NodeChange>;
  addNode: (node: Node<T>) => void;
  removeNode: (node: Node<T>) => void;
  createNode: ({
    id,
    xPos,
    yPos,
    type,
    isConnectable,
    data,
  }: NodeProps<T>) => FlowNode;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnChange<EdgeChange>;
  addNodeEdge: (edgeParams: Edge | Connection, edges: Edge[]) => void;
  removeNodeEdge: (edge: Edge | null, edgeId: string) => void;
};

export interface FlowNodeProps extends NodeProps {
  eventListener: EventListener;
}

export type CourseNodeProps = FlowNodeProps & {
  id: number;
  title?: string;
  prefix?: string;
  header?: string;
  code?: string | number;
  description?: string;
  num_units?: string | number;
  ge_category?: string;
  prerequisites?: string;
  url?: string;
};

export type FlowNode<T = FlowNodeProps> = Node<T> & {};

export interface CourseNode extends FlowNode<CourseNodeProps> {}

export enum FlowNodeTypes {
  Default = "defaultNode",
  Course = "courseNode",
  Program = "programNode",
  Department = "departmentNode",
}

export enum FlowEdgeTypes {
  Floating = "floating",
}

export const DefaultEdgeOptions = {
  style: { strokeWidth: 3 },
  type: FlowEdgeTypes.Floating,
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
};

export const FloatingEdgeType = { [FlowEdgeTypes.Floating]: FloatingEdge };

export const CourseNodeType = { [FlowNodeTypes.Course]: CourseNode };

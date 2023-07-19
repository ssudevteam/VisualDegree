// @ts-ignore
import React from "react";

import { FlowNode, SelectorMode } from "./Types";

export const SelectorModeContext = React.createContext<string>(
  SelectorMode.Move
);
export const FlowNodesContext = React.createContext<[FlowNode] | []>([]);

import React from "react";

const ModeContext = React.createContext({ mode: "move" });

export default ModeContext;

// maybe we want to put multiple contexts into the same file
// and then import {context1, context2 } from contexts.jsx

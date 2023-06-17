import React from "react";

export default function ModeSelector({ setMode }) {
  return (
    <div>
      <button onClick={() => setMode("move")}>Move</button>
      <button onClick={() => setMode("connect")}>Connect</button>
      <button onClick={() => setMode("describe")}>Describe</button>
    </div>
  );
}

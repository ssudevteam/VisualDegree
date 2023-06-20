import React from "react";
import "../../../css/editor_toolbar.css";

export default function ModeSelector({ setMode }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "130px",
        right: "20px",
        gap: "10px",
        zIndex: "1",
      }}
    >
      <button className="btn btn-tool" onClick={() => setMode("move")}>
        👆
      </button>
      <button className="btn btn-tool" onClick={() => setMode("connect")}>
        🔗
      </button>
      <button className="btn btn-tool" onClick={() => setMode("describe")}>
        🔍
      </button>
    </div>
  );
}

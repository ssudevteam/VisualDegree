import React, { useCallback, useEffect, useState, useRef } from "react";
import "../../../css/editor_toolbar.css";
import { SelectorMode } from "../../common/Types";

export default function ModeSelector({ setMode }) {
  const [currButtonId, setCurrButtonId] = useState("buttonMove");
  const buttonIds = ["buttonMove", "buttonConnect", "buttonDescribe"];
  const modes = [
    SelectorMode.Move,
    SelectorMode.Connect,
    SelectorMode.Describe,
  ];

  const buttonRef = useRef(null);

  useEffect(() => {
    document.getElementById(currButtonId)?.classList.toggle("select", true);

    // Keyboard Event Handler
    const handleKeyPress = (event) => {
      const key = parseInt(event.key, 10);
      if (key >= 1 && key <= buttonIds.length) {
        const buttonId = buttonIds[key - 1];
        const mode = modes[key - 1];
        if (buttonRef.current && buttonId !== currButtonId) {
          document
            .getElementById(currButtonId)
            ?.classList.toggle("select", false);
          document.getElementById(buttonId)?.classList.toggle("select", true);
          setMode(mode);
          setCurrButtonId(buttonId);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currButtonId, setMode, setCurrButtonId, buttonIds, modes]);

  const handleModeSelection = useCallback(
    (event, mode) => {
      const button = event.target;
      if (currButtonId === button.id) {
        return;
      }
      document.getElementById(currButtonId)?.classList.toggle("select", false);
      button.classList.toggle("select", true);
      setMode(mode);
      setCurrButtonId(button.id);
    },
    [currButtonId, setMode, setCurrButtonId]
  );

  return (
    <div
      ref={buttonRef}
      id="modeSelector"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "60px",
        gap: "10px",
        zIndex: "1",
      }}>
      <button
        id="buttonMove"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, SelectorMode.Move)}>
        👆
      </button>
      <button
        id="buttonConnect"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, SelectorMode.Connect)}>
        🔗
      </button>
      <button
        id="buttonDescribe"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, SelectorMode.Describe)}>
        🔍
      </button>
    </div>
  );
}

import { useCallback, useRef } from "react";
import { Panel } from "reactflow";
import { saveAs } from "file-saver";
import Button from "react-bootstrap/Button";

import React from "react";

const flowKey = "example-flow"; // key to save flow to localStorage

const FlowButtonPanel = ({ onAddNode, onChange, flowInstance }) => {
  const loadFileRef = useRef(null);

  const onLoadButtonClick = () => {
    loadFileRef.current.click();
  };

  const onFileOpen = useCallback(
    (event) => {
      const loadFile = async () => {
        const file = event.target.files[0];
        if (!file) {
          console.log("Error opening file: No file selected!");
          return;
        }

        const ext = file.name.slice(file.name.lastIndexOf(".") + 1);
        if (!(ext.toLowerCase() === "json")) {
          console.log(
            `Invalid file type '${ext}'! File extension must be '.json'.`
          );
          return loadFile();
        }
        console.log("File opened!");

        const reader = new FileReader();
        reader.onload = (event) => {
          console.log(`Reader load event: ${file.name}`);

          const fileBuf = event.target.result;
          const flow = JSON.parse(fileBuf.toString());
          if (flow) {
            console.log(flow);
            onChange(flow);
            console.log("Nodes loaded successfully");
          } else {
            console.log("Failed to load nodes");
          }
        };
        reader.readAsText(file);
      };

      loadFile().then();
    },
    [loadFileRef]
  );

  const onSave = useCallback(() => {
    if (flowInstance) {
      const flow = flowInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [flowInstance]);

  const onSaveFile = useCallback(() => {
    if (flowInstance) {
      const flow = flowInstance.toObject();
      const blob = new Blob([JSON.stringify(flow)], {
        type: "application/json",
      });
      saveAs(blob, "my-flowchart.json");
    }
  }, [flowInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));
      if (flow) {
        onChange(flow);
      }
    };

    restoreFlow().then();
  }, []);

  return (
    <Panel id="flowButtonPanel" position="top-right">
      <Button variant="secondary" onClick={onAddNode}>
        Add Course
      </Button>
      <Button variant="secondary" onClick={onSave}>
        Save State
      </Button>
      <Button variant="secondary" onClick={onRestore}>
        Restore
      </Button>
      <>
        <Button variant="secondary" onClick={onLoadButtonClick}>
          Import
        </Button>
        <input
          ref={loadFileRef}
          type="file"
          style={{ display: "none" }}
          onChange={onFileOpen}
        />
      </>
      <Button variant="secondary" onClick={onSaveFile}>
        Export
      </Button>
    </Panel>
  );
};

export default FlowButtonPanel;

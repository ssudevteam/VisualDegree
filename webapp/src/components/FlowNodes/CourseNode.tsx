// @ts-ignore
import React, { useState, useContext, useCallback, useEffect } from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

import FlowNode from "./FlowNode";

import { SelectorModeContext } from "../../common/Contexts";
import { CourseNode, SelectorMode } from "../../common/Types";

import "../../../css/customNodes.css";

const CourseNodeFC: React.FC<CourseNode> = (props) => {
  const [showPopover, setShowPopover] = useState(false);
  const selectedMode = useContext(SelectorModeContext);
  const [showNode, setShowNode] = useState(true);

  const { id, data } = props;
  const {
    id: courseId,
    header,
    description,
    num_units,
    ge_category,
    prerequisites,
    url,
  } = data;

  useEffect(() => {
    const closePopoverOnEscape = (event) => {
      if (event.key.toLowerCase() === "escape" || event.code === "27") {
        handleClosePopover();
      }
    };
    document.addEventListener("keydown", closePopoverOnEscape);
    return () => document.removeEventListener("keydown", closePopoverOnEscape);
  }, []);

  const handleNodeClick = useCallback(() => {
    if (selectedMode === SelectorMode.Describe) {
      setShowPopover(!showPopover);
    }
  }, [selectedMode, setShowPopover]);

  const handleClosePopover = useCallback(() => {
    setShowPopover(false);
  }, [setShowPopover]);

  const popover = (
    <Popover id="course-popover" className="custom-popover">
      <Popover.Header className="custom-popover-header">
        <h6 className="custom-popover-title">{header}</h6>
        <Button
          variant="link"
          className="custom-popover-close"
          onClick={handleClosePopover}>
          <span className="custom-popover-close-icon">X</span>
        </Button>
      </Popover.Header>
      <Popover.Body className="custom-popover-body">
        <div>
          <b>Description:</b>
          {` ${description}`}
        </div>
        <div>
          <b>Units:</b>
          {` ${num_units}`}
        </div>
        <div>
          <b>GE Category:</b>
          {` ${ge_category ? ge_category : "None"}`}
        </div>
        <div>
          <b>Prerequisites:</b>
          {` ${prerequisites ? prerequisites : "None"}`}
        </div>
        <a href={url}>View on Sonoma.edu</a>
      </Popover.Body>
    </Popover>
  );

  const handleCloseNode = () => {
    setShowNode(false);
  };

  return (
    <FlowNode
      id={id ? id : courseId}
      onClick={handleNodeClick}
      show={showNode}
      {...props}>
      <Popover.Header
        className="custom-popover-header"
        style={{
          padding: 0,
          height: "20px",
          display: "flex",
          justifyContent: "flex-end",
          borderRadius: "unset",
        }}>
        <Button
          variant="outline-secondary"
          onClick={handleCloseNode}
          style={{
            padding: 0,
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "transparent",
          }}>
          <span
            style={{
              paddingLeft: "1px",
              paddingBottom: "1px",
              fontSize: "small",
            }}>
            X
          </span>
        </Button>
      </Popover.Header>
      <div
        className="node-label"
        style={{
          padding: "8px",
          marginBottom: "4px",
        }}>
        {header}
      </div>
      <OverlayTrigger
        trigger="click"
        placement="auto"
        show={handleNodeClick && showPopover}
        overlay={popover}>
        <div />
      </OverlayTrigger>
    </FlowNode>
  );
};

export default CourseNodeFC;

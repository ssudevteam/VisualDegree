import React, { useRef, useEffect } from "react";
import { setWindowTitle } from "../../../../utils/html";
import FlowCanvas from "../../components/FlowCanvas/FlowCanvas";
import DegreeBuilderOverlay from "./DegreeBuilderOverlay";

const DegreeBuilderView = () => {
  const overlayRef = useRef();
  const flowCanvasRef = useRef();

  useEffect(() => {
    setWindowTitle("VisualDegree | DegreeBuilder");
  }, []);

  const handleAddCourse = (course) => {
    if (!(flowCanvasRef && flowCanvasRef.current)) {
      console.log("Error: FlowCanvasRef is null");
      return;
    }

    let { lastPosX, lastPosY } = flowCanvasRef.current?.getLastNodePosition();

    if (!lastPosX || !lastPosY) {
      lastPosX = window.innerWidth / 2;
      lastPosY = window.innerHeight / 2;
    }

    const newNode = {
      id: course.id,
      data: {
        ...course,
      },
      type: "courseNode",
      position: {
        y: lastPosY + Math.random() * 200,
        x: lastPosX + Math.random() * 200,
      },
    };

    flowCanvasRef.current?.addNode(newNode);
  };

  const handleRemoveCourse = (course) => {
    flowCanvasRef?.current?.removeNode(course);
  };

  return (
    <div
      id="builderView"
      className="builder-view"
      style={{
        backgroundColor: "whitesmoke",
      }}>
      <DegreeBuilderOverlay
        ref={overlayRef}
        onNodeAdd={handleAddCourse}
        onNodeRemove={handleRemoveCourse}>
        <FlowCanvas ref={flowCanvasRef} />
      </DegreeBuilderOverlay>
    </div>
  );
};

export default DegreeBuilderView;

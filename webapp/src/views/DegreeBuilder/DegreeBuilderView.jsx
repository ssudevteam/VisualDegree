import React, { createRef } from "react";
import { setWindowTitle } from "../../../../utils/html";
import FlowCanvas from "../../components/FlowCanvas/FlowCanvas";
import DegreeBuilderOverlay from "./DegreeBuilderOverlay";

class DegreeBuilderView extends React.Component {
  overlayRef = createRef();
  flowCanvasRef = createRef();

  componentDidMount() {
    setWindowTitle("VisualDegree | DegreeBuilder");
  }

  render() {
    return (
      <div
        id="builderView"
        className="builder-view"
        style={{
          backgroundColor: "whitesmoke",
        }}>
        <DegreeBuilderOverlay>
          <FlowCanvas forwardRef={this.flowCanvasRef} />
        </DegreeBuilderOverlay>
      </div>
    );
  }
}

export default DegreeBuilderView;

import React, {createRef} from "react";
import {setWindowTitle} from '../../../../utils/html'
import FlowCanvas from "../../components/FlowCanvas/FlowCanvas";
import DegreeBuilderOverlay from "./DegreeBuilderOverlay";

class DegreeBuilderView extends React.Component {
    overlayRef = createRef();
    flowCanvasRef = createRef();

    componentDidMount() {
        setWindowTitle('VisualDegree | DegreeBuilder');
    }

    render() {
        return (
            <div id="builderView" className="builder-view" style={{
                backgroundColor: 'whitesmoke'
            }}>
                <DegreeBuilderOverlay forwardRef={this.overlayRef}/>
                <div id='flowContainer' style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'whitesmoke',
                }}>
                    <FlowCanvas forwardRef={this.flowCanvasRef}/>
                </div>
            </div>
        );
    }
}

export default DegreeBuilderView;

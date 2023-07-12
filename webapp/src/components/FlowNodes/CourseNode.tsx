// @ts-ignore
import React, {useState, useContext, useCallback} from "react";
import {OverlayTrigger, Button, Popover} from "react-bootstrap";
import {Handle, Position, useStore} from "reactflow";
import "../../reactflow/floating_edges/style.css";
import "../../../css/customNodes.css";
import {SelectorModeContext} from "../../common/Contexts";
import {BaseFlowNode, SelectorMode} from "../../common/Types";

export interface CourseNodeProps {
    id: number;
    title?: string;
    prefix?: string;
    header?: string;
    code?: string | number;
    description?: string;
    num_units?: string | number;
    ge_category?: string;
    prerequisites?: string;
    url?: string;
}

export interface CourseNode extends BaseFlowNode<CourseNodeProps> {
}

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const CourseNodeFC: React.FC<CourseNode> = ({data, isConnectable}) => {
    const [showPopover, setShowPopover] = useState(false);
    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isConnecting = !!connectionNodeId;
    const selectedMode = useContext(SelectorModeContext);

    // refactor to useEffect
    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "escape" || event.code === "27") {
            handleClosePopover();
        }
    });

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
                <h6 className="custom-popover-title">{data?.header}</h6>
                <Button
                    variant="link"
                    className="custom-popover-close"
                    onClick={handleClosePopover}>
                    <span className="custom-popover-close-icon">X</span>
                </Button>
            </Popover.Header>
            <Popover.Body className="custom-popover-body">
                <div>
                    <b>Description:</b> {data?.description}
                </div>
                <div>
                    <b>Units:</b> {data?.num_units}
                </div>
                <div>
                    <b>GE Category:</b> {data?.ge_category ? data.ge_category : "None"}
                </div>
                <div>
                    <b>Prerequisites:</b>{" "}
                    {data?.prerequisites ? data.prerequisites : "None"}
                </div>
                <a href={data?.url}>View on Sonoma.edu</a>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            {!isConnecting && (
                <Handle
                    type="source"
                    position={Position.Right}
                    className="courseHandle"
                    id="a" // does this mean all the handles have the same Ids?
                    onConnect={(params) => console.log("handle onConnect", params)}
                    isConnectable={isConnectable}
                />
            )}
            <Handle
                type="target"
                position={Position.Left}
                className="courseHandle"
                isConnectable={isConnectable}
                isConnectableStart={false}
            />

            <div
                className="node-wrapper"
                onClick={handleNodeClick}
                style={{
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "8px",
                    cursor: "pointer",
                    width: "140px",
                }}>
                <div
                    className="node-label"
                    style={{
                        marginBottom: "4px",
                    }}>
                    {data?.header}
                </div>
            </div>
            <OverlayTrigger
                trigger="click"
                placement="auto"
                show={handleNodeClick && showPopover}
                overlay={popover}>
                <div/>
            </OverlayTrigger>
        </>
    );
};

export default CourseNodeFC;

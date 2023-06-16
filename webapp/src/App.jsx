import React, {createRef} from "react";
import DegreeBuilderView from "./views/DegreeBuilder/DegreeBuilderView";
import '../css/App.css';

export default function App() {
    const degreeBuilderRef = createRef();

    return (
        <div id="appWindow" className='app-window'>
            <DegreeBuilderView forwardRef={degreeBuilderRef}/>
        </div>
    );
}

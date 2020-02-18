import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCropAlt,
    faSync,
    faSun,
    faAdjust,
    faTint,
    faBraille,
    faEye,
    faFont,
    faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/Sidebar.css";

export default ({ tool, setTool }) => (
    <div className="sidebar-container">
        <p
            className={tool === "crop" ? "active" : undefined}
            onClick={() => setTool("crop")}
        >
            <FontAwesomeIcon icon={faCropAlt} className="icon" /> Crop
        </p>
        <p
            className={tool === "rotate" ? "active" : undefined}
            onClick={() => setTool("rotate")}
        >
            <FontAwesomeIcon icon={faSync} className="icon" />
            Rotate
        </p>
        <p
            className={tool === "brightness" ? "active" : undefined}
            onClick={() => setTool("brightness")}
        >
            <FontAwesomeIcon icon={faSun} className="icon" />
            Brightness
        </p>
        <p
            className={tool === "contrast" ? "active" : undefined}
            onClick={() => setTool("contrast")}
        >
            <FontAwesomeIcon icon={faAdjust} className="icon" />
            Contrast
        </p>
        <p
            className={tool === "saturation" ? "active" : undefined}
            onClick={() => setTool("saturation")}
        >
            <FontAwesomeIcon icon={faTint} className="icon" />
            Saturation
        </p>
        <p
            className={tool === "blur" ? "active" : undefined}
            onClick={() => setTool("blur")}
        >
            <FontAwesomeIcon icon={faBraille} className="icon" />
            Blur
        </p>
        <p
            className={tool === "filters" ? "active" : undefined}
            onClick={() => setTool("filters")}
        >
            <FontAwesomeIcon icon={faEye} className="icon" />
            Filters
        </p>
        <p
            className={tool === "text" ? "active" : undefined}
            onClick={() => setTool("text")}
        >
            <FontAwesomeIcon icon={faFont} className="icon" />
            Text
        </p>
        <p
            className={tool === "doodle" ? "active" : undefined}
            onClick={() => setTool("doodle")}
        >
            <FontAwesomeIcon icon={faPencilAlt} className="icon" />
            Doodle
        </p>
    </div>
);

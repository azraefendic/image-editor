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

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <p>
                {" "}
                <FontAwesomeIcon icon={faCropAlt} className="icon" /> Crop
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faSync} className="icon" />
                Rotate
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faSun} className="icon" />
                Brightness
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faAdjust} className="icon" />
                Contrast
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faTint} className="icon" />
                Saturation
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faBraille} className="icon" />
                Blur
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faEye} className="icon" />
                Filters
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faFont} className="icon" />
                Text
            </p>
            <p>
                {" "}
                <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                Doodle
            </p>
        </div>
    );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";

import photo from "../assets/photo.png";
import logo from "../assets/logo.png";
import "../styles/Header.css";

export default function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="Logo" />
            <div className="upload-download">
                <div className="upload">
                    <a href=".">
                        <button className="open-button">
                            <strong>open new</strong>
                        </button>
                    </a>
                </div>
                <a className="dnw-button">
                    <strong>download</strong>
                </a>
            </div>
            <div className="undoRedo">
                <FontAwesomeIcon icon={faUndo} className="undo" />
                <FontAwesomeIcon icon={faRedo} className="redo" />
            </div>
        </header>
    );
}

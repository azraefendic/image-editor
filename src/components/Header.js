import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faShare } from "@fortawesome/free-solid-svg-icons";

import photo from "../assets/photo.png";
import logo from "../assets/logo.png";
import "../styles/Header.css";

export default function Header(props) {
    const image = props.image;
    return (
        <header>
            <img className="logo" src={logo} alt="Logo" />
            {image && (
                <>
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
                        <FontAwesomeIcon icon={faReply} className="undo" />
                        <FontAwesomeIcon icon={faShare} className="redo" />
                    </div>
                </>
            )}
        </header>
    );
}

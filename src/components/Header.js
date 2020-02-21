import React from "react";
import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faShare } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";
import "../styles/Header.css";

export default ({ image }) => {
    const saveImage = () => {
        const canvas = document.getElementsByTagName("canvas")[0];
        canvas.toBlob(function(blob) {
            saveAs(blob, "image.png");
        });
    }
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="dnw-button" onClick={saveImage}>
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

import React from "react";

import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

import "../../styles/Editor.css";

export default ({ image }) => {
    return (
        <section className="editor-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="image-and-footer">
                <div className="img">
                    <img className="image" src={image} alt="Image for edit" />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </section>
    );
};

import React, { useState, useReducer } from "react";

import reducer, { initialState } from "reducer";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

import "../../styles/Editor.css";

export default ({ image }) => {
    const [tool, setTool] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section className="editor-container">
            <div className="sidebar">
                <Sidebar tool={tool} setTool={setTool} />
            </div>
            <div className="image-and-footer">
                <div className="img">
                    <img className="image" src={image} alt="Image for edit" />
                </div>
                <div className="footer">
                    <Footer tool={tool} state={state} dispatch={dispatch} />
                </div>
            </div>
        </section>
    );
};

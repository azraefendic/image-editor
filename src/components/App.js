import React, { useState } from "react";

import Header from "./Header.js";
import Uploader from "./Uploader.js";
import Editor from "./editor/Editor.js";

import "../styles/App.css";

function App() {
    const [image, setImage] = useState();

    return (
        <div className="app">
            <Header />
            {image ? (
                <Editor image={image} />
            ) : (
                <Uploader setImage={setImage} />
            )}
        </div>
    );
}

export default App;

import React, { useEffect, useState, useReducer } from "react";
import Konva from "konva";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";

import reducer, { initialState } from "reducer";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

import "../../styles/Editor.css";

export default ({ url }) => {
    const [tool, setTool] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [image] = useImage(url, "Anonymous");
    const imageRef = React.useRef();

    useEffect(() => {
        if (image) {
            imageRef.current.cache();
            imageRef.current.getLayer().batchDraw();
        }
    }, [image]);

    return (
        <section className="editor-container">
            <div className="sidebar">
                <Sidebar tool={tool} setTool={setTool} />
            </div>
            <div className="image-and-footer">
                <div className="img">
                    {/*
                        properties of Stage class, you can pass them as props
                        to the Stage component!
                        Tu se mogu podesiti dimenzije (width & height) i pozicija canvasa (x & y)
                        https://konvajs.org/api/Konva.Stage.html#main
                    */}
                    <Stage
                        width={window.innerWidth}
                        height={window.innerHeight}
                    >
                        <Layer>
                            {/*
                                Moze se podesiti i puno stvari za sliku, ukljucujuci poziciju slike
                                unutar canvasa. Napraviti dimenzije canvasa i onda podesiti poziciju
                                slike unutar toga, da se centrira.
                                API za sliku, tu ima i sve ostalo sto se moze uraditi, od rotacija, crop, i dosta drugih
                                raznih efekata: https://konvajs.org/api/Konva.Image.html
                            */}
                            <Image
                                ref={imageRef}
                                image={image}
                                filters={[
                                    Konva.Filters.Blur,
                                    Konva.Filters.Brighten,
                                    Konva.Filters.Contrast,
                                    Konva.Filters.HSV
                                ]}
                                blurRadius={state.blur}
                                brightness={state.brightness}
                                contrast={state.contrast}
                                saturation={state.saturation}
                            />
                            <Text
                                text={state.text}
                                x={state.textPosition.x}
                                y={state.textPosition.y}
                                fill={state.colour}
                                fontSize={state.fontSize}
                                draggable={true}
                                onDragEnd={e => {
                                    dispatch({
                                        type: "dragText",
                                        value: {
                                            x: e.target.x(),
                                            y: e.target.y()
                                        }
                                    });
                                }}
                            />
                        </Layer>
                    </Stage>
                </div>
                <div className="footer">
                    <Footer tool={tool} state={state} dispatch={dispatch} />
                </div>
            </div>
        </section>
    );
};

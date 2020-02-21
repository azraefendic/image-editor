import React, { useEffect, useState, useReducer } from "react";
import Konva from "konva";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";

import reducer, { initialState } from "reducer";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

import "../../styles/Editor.css";

/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 */
const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
};

export default ({ url }) => {
    const [tool, setTool] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [image] = useImage(url, "Anonymous");
    const imageRef = React.useRef();

    const srcWidth = (image && image.width) || 0;
    const srcHeight = (image && image.height) || 0;

    const pageWidth = document.getElementsByTagName("body")[0].offsetWidth;
    const sidebar = document.getElementsByClassName("sidebar");
    const sidebarWidth =
        (sidebar && sidebar.length && sidebar[0].offsetWidth) || 0;

    const pageHeight = document.getElementsByTagName("body")[0].offsetHeight;
    const header = document.getElementsByTagName("header");
    const headerHeight =
        (header && header.length && header[0].offsetHeight) || 0;
    const footer = document.getElementsByClassName("footer");
    const footerHeight =
        (footer && footer.length && footer[0].offsetHeight) || 0;

    const maxWidth = pageWidth - sidebarWidth - 20;
    const maxHeight = pageHeight - headerHeight - footerHeight - 60;

    const ratioFit = calculateAspectRatioFit(
        srcWidth,
        srcHeight,
        maxWidth,
        maxHeight
    );

    let filters = [
        Konva.Filters.Blur,
        Konva.Filters.Brighten,
        Konva.Filters.Contrast,
        Konva.Filters.HSV
    ];

    if (state.sepia) {
        filters.push(Konva.Filters.Sepia);
    }
    if (state.invert) {
        filters.push(Konva.Filters.Invert);
    }
    if (state.grayscale) {
        filters.push(Konva.Filters.Grayscale);
    }

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
                    <Stage width={ratioFit.width} height={ratioFit.height}>
                        <Layer>
                            <Image
                                ref={imageRef}
                                image={image}
                                width={ratioFit.width}
                                height={ratioFit.height}
                                filters={filters}
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

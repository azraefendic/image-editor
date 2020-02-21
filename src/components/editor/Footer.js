import React from "react";
import Slider from "rc-slider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";

import "rc-slider/assets/index.css";
import "../../styles/Footer.css";

export default ({ tool, state, dispatch }) => {
    const keyCheck = e => {
        if (e.key === "Enter") {
            e.preventDefault(); //stops the annoying moving to a new line
            const text = e.target.value;
            dispatch({ type: "text", value: text });
        }
    };

    const handleSliderChange = (name, value) =>
        dispatch({ type: name, value: value });

    return (
        <section>
            {tool === "crop" && (
                <div className="crop">
                    <button className="save-button">
                        <strong>save</strong>
                    </button>
                </div>
            )}
            {tool === "rotate" && (
                <div className="align">
                    <FontAwesomeIcon icon={faUndo} className="rotate-left" />
                    <FontAwesomeIcon icon={faRedo} className="rotate-right" />
                </div>
            )}
            {tool === "brightness" && (
                <div className="align">
                    <Slider
                        id="brightness"
                        className="slider"
                        min={-0.5}
                        max={0.5}
                        step={0.05}
                        value={state.brightness}
                        onChange={value =>
                            handleSliderChange("brightness", value)
                        }
                        aria-labelledby="input-slider"
                    />
                </div>
            )}
            {tool === "contrast" && (
                <div className="align">
                    <Slider
                        id="contrast"
                        className="slider"
                        min={-50}
                        max={50}
                        step={1}
                        value={state.contrast}
                        onChange={value =>
                            handleSliderChange("contrast", value)
                        }
                        aria-labelledby="input-slider"
                    />
                </div>
            )}
            {tool === "saturation" && (
                <div className="align">
                    <Slider
                        id="saturation"
                        className="slider"
                        min={-1.5}
                        max={1.5}
                        step={0.1}
                        value={state.saturation}
                        onChange={value =>
                            handleSliderChange("saturation", value)
                        }
                        aria-labelledby="input-slider"
                    />
                </div>
            )}
            {tool === "blur" && (
                <div className="align">
                    <Slider
                        id="blur"
                        className="slider"
                        min={0}
                        max={5}
                        step={0.5}
                        value={state.blur}
                        onChange={value => handleSliderChange("blur", value)}
                        aria-labelledby="input-slider"
                    />
                </div>
            )}
            {tool === "filters" && (
                <div className="align filters">
                    <p
                        className={state.grayscale ? "active" : undefined}
                        onClick={() =>
                            dispatch({
                                type: "grayscale"
                            })
                        }
                    >
                        Grayscale
                    </p>
                    <p
                        className={state.sepia ? "active" : undefined}
                        onClick={() =>
                            dispatch({
                                type: "sepia"
                            })
                        }
                    >
                        Sepia
                    </p>
                    <p
                        className={state.invert ? "active" : undefined}
                        onClick={() =>
                            dispatch({
                                type: "invert"
                            })
                        }
                    >
                        Invert
                    </p>
                </div>
            )}
            {tool === "text" && (
                <div className="align">
                    <input
                        className="text"
                        placeholder="Add your text here...."
                        onKeyDown={keyCheck}
                    />
                    <input
                        className="font"
                        type="number"
                        min={8}
                        max={100}
                        value={state.fontSize}
                        onChange={e =>
                            dispatch({
                                type: "fontSize",
                                value: Number.parseInt(e.currentTarget.value)
                            })
                        }
                    />
                    <input
                        className="color-picker"
                        type="color"
                        value={state.colour}
                        onChange={e =>
                            dispatch({
                                type: "colour",
                                value: e.currentTarget.value
                            })
                        }
                    />
                </div>
            )}
            {tool === "doodle" && (
                <div className="align doodle">
                    <span id="black" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "black"
                            })
                    }} />
                    <span id="indigo" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "indigo"
                            })
                    }} />
                    <span id="red" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "red"
                            })
                    }} />
                    <span id="blue" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "blue"
                            })
                    }} />
                    <span id="green" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "green"
                            })
                    }} />
                    <span id="yellow" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "yellow"
                            })
                    }} />
                    <span id="white" onClick={() => {
                         dispatch({
                                type: "doodleColour",
                                value: "white"
                            })
                    }} />
                </div>
            )}
        </section>
    );
};

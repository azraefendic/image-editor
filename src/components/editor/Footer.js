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
            console.log("e.target.value: ", e.target.value);
            console.log("e.keyCode: ", e.keyCode);
            const text = e.target.value;
            e.target.value = "";
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
                        min={-1}
                        max={1}
                        step={0.1}
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
                        min={-100}
                        max={100}
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
                        min={-2}
                        max={2}
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
                        max={100}
                        step={1}
                        value={state.blur}
                        onChange={value => handleSliderChange("blur", value)}
                        aria-labelledby="input-slider"
                    />
                </div>
            )}
            {tool === "filters" && (
                <div className="align">
                    <p>Grayscale</p>
                    <p>Sepia</p>
                    <p>Invert</p>
                </div>
            )}
            {tool === "text" && (
                <div className="align">
                    <textarea
                        className="text"
                        placeholder="Add your text here...."
                        onKeyDown={keyCheck}
                    ></textarea>
                    <button className="save-button">
                        <strong>save</strong>
                    </button>
                </div>
            )}
            {tool === "doodle" && (
                <div className="align">
                    <span id="black"> </span>
                    <span id="indigo"> </span>
                    <span id="red"> </span>
                    <span id="blue"> </span>
                    <span id="green"> </span>
                    <span id="yellow"> </span>
                    <span id="white"> </span>
                </div>
            )}
        </section>
    );
};

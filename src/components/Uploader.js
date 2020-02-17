import React from "react";
import { useDropzone } from "react-dropzone";

import img from "../assets/default.jpg";
import upload from "../assets/upload.png";

import "../styles/Uploader.css";

export default ({ setImage }) => {
    const {
        // acceptedFiles,
        rejectedFiles,
        // isDragActive,
        getRootProps,
        getInputProps
    } = useDropzone({
        onDrop: acceptedFiles => {
            // TODO: call URL.revokeObjectURL(image) at some point to release the Object URL.
            // Probably when the user wants to upload a new image or finishes editing
            // the current one.
            // Reference: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#Memory_management
            setImage(URL.createObjectURL(acceptedFiles[0]));
        },
        accept: "image/*"
    });

    if (rejectedFiles.length) {
        alert("The file you uploaded is not an image!");
    }

    return (
        <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p className="d-n-d">
                    Drag and drop your image here, or click to select one
                </p>
                <img src={upload} alt="Upload icon" />
            </div>
        </section>
    );
};

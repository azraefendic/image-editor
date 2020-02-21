export const initialState = {
    // crop: null,
    // rotate: null,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    blur: 0,
    filters: [],
    text: null,
    textPosition: {x: 200, y: 200},
    fontSize: 18,
    colour: "#ffffff",
    // doodle: null
};

export default function reducer(state, action) {
    switch (action.type) {
        case "brightness":
            return {
                ...state,
                brightness: action.value
            };
        case "contrast":
            return {
                ...state,
                contrast: action.value
            };
        case "saturation":
            return {
                ...state,
                saturation: action.value
            };
        case "blur":
            return {
                ...state,
                blur: action.value
            };
        case "filters":
            return {
                ...state,
                filters: action.value
            };
        case "text":
            return {
                ...state,
                text: action.value
            };
        case "fontSize":
            return {
                ...state,
                fontSize: action.value
            };
        case "colour":
            return {
                ...state,
                colour: action.value
            };
        case "dragText":
            return {
                ...state,
                textPosition: action.value
            };
        default:
            // eslint-disable-next-line no-throw-literal
            throw "Unknown action type";
    }
}

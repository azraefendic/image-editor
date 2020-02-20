export const initialState = {
    // crop: null,
    // rotate: null,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    blur: 0,
    filters: []
    // text: null,
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
        default:
            throw "Unknown action type";
    }
}

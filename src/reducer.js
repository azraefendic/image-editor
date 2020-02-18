export const initialState = {
    // crop: null,
    // rotate: null,
    brightness: 50,
    contrast: 50,
    saturation: 50,
    blur: 50,
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

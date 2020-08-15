import {
    SET_CURRENT_ADDICTION_NUMBER,
    ADD_LOADED_ADDICTION,
    SET_LOADED_ADDICTION
} from "../actions/addictionActions";

const initialState = {
    addictionNum: 1,
    loadedAddictions: []
};

const addiction = (state=initialState, action) => {
    switch (action.type){
        case SET_CURRENT_ADDICTION_NUMBER:
            return {
                ...state,
                addictionNum: action.payload
            };
        case ADD_LOADED_ADDICTION:
            return {
                ...state,
                loadedAddictions: [...state.loadedAddictions, action.payload]
            };
        case SET_LOADED_ADDICTION:
            return {
                ...state,
                loadedAddictions: state.loadedAddictions.map(el => el.num === action.payload.num ? action.payload: el)
            };
        default:
            return state;
    }
};

export default addiction;

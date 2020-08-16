import {
    SET_CURRENT_ADDICTION_NUMBER,
    ADD_LOADED_ADDICTION,
    SET_LOADED_ADDICTION,
    SET_RESULTS_AVAILABLE,
    SET_RESULTS_LOADING
} from "../actions/addictionActions";

const initialState = {
    addictionNum: 1,
    loadedAddictions: [],
    resultsAvailable: false,
    resultsLoading: false
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
        case SET_RESULTS_AVAILABLE:
            return {
                ...state,
                resultsAvailable: action.payload
            };
        case SET_RESULTS_LOADING:
            return {
                ...state,
                resultsLoading: action.payload
            };
        default:
            return state;
    }
};

export default addiction;

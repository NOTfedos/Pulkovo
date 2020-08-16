import axios from 'axios';

const SET_CURRENT_ADDICTION_NUMBER = 'SET_CURRENT_ADDICTION_NUMBER';
const ADD_LOADED_ADDICTION = 'ADD_LOADED_ADDICTION';
const SET_LOADED_ADDICTION = 'SET_LOADED_ADDICTION';
const SET_RESULTS_AVAILABLE = 'SET_RESULTS_AVAILABLE';

export const setCurrentAddictionNumber = (addiction) => {
    return {
        type: SET_CURRENT_ADDICTION_NUMBER,
        payload: addiction
    }
};

export const addLoadedAddiction = (addiction) => {
    return {
        type: ADD_LOADED_ADDICTION,
        payload: addiction
    }
};

export const setLoadedAddiction = (addiction) => {
    return {
        type: SET_LOADED_ADDICTION,
        payload: addiction
    }
};

export const setResultsAvailable = (available) => {
    return {
        type: SET_RESULTS_AVAILABLE,
        payload: available
    }
};

export const saveFile = (addictionNum, file) => (dispatch, getState) => {
    const state = getState().addiction;

    const addiction = state.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];

    const formData = new FormData();
    formData.append(`application${addictionNum}`, file);
    axios.post("http://localhost:3001/api/upload", formData).then(
        res => {
            if (!res.data) return;
            const add = {num: addictionNum, fileUrl: res.data.fileUrl};
            if (addiction)
                dispatch(setLoadedAddiction(add));
            else
                dispatch(addLoadedAddiction(add));

            /*if (state.loadedAddictions.length === 5)
                axios.post("http://localhost:3001/api/upload", formData).then(
                    res =>
                        dispatch(addLoadedAddiction({
                            num: "result",
                            fileUrl: 'http://localhost:3001/table/1'
                        }))
                ).then(dispatch(setResultsAvailable(true)));

             */
            console.log(state);
        }
    )


};

export { SET_CURRENT_ADDICTION_NUMBER, ADD_LOADED_ADDICTION, SET_LOADED_ADDICTION, SET_RESULTS_AVAILABLE };

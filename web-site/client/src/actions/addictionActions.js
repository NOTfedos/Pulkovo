import axios from 'axios';

const SET_CURRENT_ADDICTION_NUMBER = 'SET_CURRENT_ADDICTION_NUMBER';
const ADD_LOADED_ADDICTION = 'ADD_LOADED_ADDICTION';
const SET_LOADED_ADDICTION = 'SET_LOADED_ADDICTION';

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

export const saveFile = (addictionNum, file) => (dispatch, getState) => {
    const state = getState().addiction;

    console.log(file);

    const addiction = state.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];

    const formData = new FormData();
    formData.append(`application${addictionNum}`, file);
    axios.post("http://localhost:1489/api/upload", formData).then(
        res => {
            const add = {num: addictionNum, fileUrl: res.data.fileUrl};
            if (addiction)
                dispatch(setLoadedAddiction(add));
            else
                dispatch(addLoadedAddiction(add));

        }
    );


};

export { SET_CURRENT_ADDICTION_NUMBER, ADD_LOADED_ADDICTION, SET_LOADED_ADDICTION };

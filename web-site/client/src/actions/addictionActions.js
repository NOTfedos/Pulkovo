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

export const saveFile = (addictionNum, file) => dispatch => {

    console.log(file);

    const addiction = state.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];
    if (addiction) {
        dispatch(setLoadedAddiction({...addiction, fileUrl: file}))
    } else {
        const formData = new FormData();
        formData.append(`application${addictionNum}`, file);
        axios.post("http://localhost:1489/api/upload", formData).then(
            res => dispatch(addLoadedAddiction({num: addictionNum, fileUrl: res.data.fileUrl}))
    )
    }
};

export { SET_CURRENT_ADDICTION_NUMBER, ADD_LOADED_ADDICTION, SET_LOADED_ADDICTION };

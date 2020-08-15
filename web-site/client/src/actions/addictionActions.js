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

    const addiction = state.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];
    if (addiction) {
        dispatch(setLoadedAddiction({...addiction, file: file}))
    } else {
        dispatch(addLoadedAddiction({num: addictionNum, file: file}))
    }
};

export { SET_CURRENT_ADDICTION_NUMBER, ADD_LOADED_ADDICTION, SET_LOADED_ADDICTION };

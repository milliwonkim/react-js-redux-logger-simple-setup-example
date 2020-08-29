import {
    // DECREASE,
    // INCREASE,
    // RESET,
    SET_LOADING,
    GET_PRODUCTS,
} from './actionTypes';

// export const DECREASE = 'DECREASE';
// export const INCREASE = 'INCREASE';
// export const RESET = 'RESET';

// export const SET_LOADING = 'SET_LOADING';
// export const GET_PRODUCTS = 'GET_PRODUCTS';

export const setLoading = () => {
    return { type: SET_LOADING };
};

export const getProduct = () => {
    return async function (dispatch) {
        dispatch(setLoading());
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        dispatch({ type: GET_PRODUCTS, payload: data });
    };
};

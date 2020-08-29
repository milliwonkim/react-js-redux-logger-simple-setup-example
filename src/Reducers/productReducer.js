import { SET_LOADING, GET_PRODUCTS } from '../Actions/actionTypes';

const initialState = {
    loading: false,
    products: [],
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true };
        case GET_PRODUCTS:
            return { ...state, loading: false, products: action.payload };
        default:
            return state;
    }
}

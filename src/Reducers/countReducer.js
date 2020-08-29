import { DECREASE, INCREASE, RESET } from '../Actions/actionTypes';

const initialState = {
    count: 0,
    name: 'john',
};

export default function countReducer(state = initialState, action) {
    switch (action.type) {
        case DECREASE:
            return {
                ...state,
                count: state.count - 1,
                name: state.name.slice(0, -1),
            };
        case INCREASE:
            return {
                ...state,
                count: state.count + 1,
                name: state.name + 'k',
            };
        case RESET:
            return {
                ...state,
                count: 0,
                name: 'kiwon',
            };
        default:
            return state;
    }
}

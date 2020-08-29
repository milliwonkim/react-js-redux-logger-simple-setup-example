import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, RESET, INCREASE } from '../Actions/actionTypes';

export const Count = ({ increase, decrease, reset, count, name }) => {
    return (
        <div class='count'>
            <div>
                <h1>{count}</h1>
                <h2>{name}</h2>
            </div>
            <button onClick={increase}>INCREASE</button>
            <button onClick={decrease}>DECREASE</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.countState.count,
        name: state.countState.name,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: () => dispatch({ type: INCREASE }),
        decrease: () => dispatch({ type: DECREASE }),
        reset: () => {
            dispatch({ type: RESET });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions/counterActions';

function Counter() {
    const counter = useSelector(
        (state) => {
            return state.counter
        }
    );
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(Actions.increment);
    };
    const decrement = () => {
        dispatch(Actions.decrement);
    };
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
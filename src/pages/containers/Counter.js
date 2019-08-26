import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/counterActions'
import styles from './Counter.module.css'

function Counter() {
    const counter = useSelector(
        (state) => {
            return state.counter
        }
    )
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(Actions.increment)
    };
    const decrement = () => {
        dispatch(Actions.decrement)
    }
    return (
        <div className={styles.counter}>
            <button onClick={decrement}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter
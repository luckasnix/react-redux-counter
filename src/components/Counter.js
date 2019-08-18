import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as Actions from '../store/actions/counterActions'

const StyledCounter = styled.div`
  width: 240px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  p {
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 24px;
    color: #192a56;
  }
  button {
    width: 80px;
    height: 80px;
    font-family: sans-serif;
    font-size: 32px;
    color: #f5f6fa;
    border: none;
    border-radius: 40px;
    background-color: #40739e;
    cursor: pointer;
  }
`

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
        <StyledCounter>
            <button onClick={decrement}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
        </StyledCounter>
    );
}

export default Counter
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CounterDisplay from '../components/CounterDisplay'
import CounterBtn from '../components/CounterBtn'
import * as Actions from '../../store/actions/counterActions'
import styles from './Counter.module.css'

function Counter() {
  const counter = useSelector(
    (state) => {
      return state.counter
    }
  )
  const dispatch = useDispatch()
  const increment = useCallback(
    () => {
      dispatch(Actions.increment)
    },
    [dispatch]
  )
  const decrement = useCallback(
    () => {
      dispatch(Actions.decrement)
    },
    [dispatch]
  )
  return (
    <div className={styles.counter}>
      <CounterBtn clicked={decrement} title='-'/>
      <CounterDisplay display={counter}/>
      <CounterBtn clicked={increment} title='+'/>
    </div>
  )
}

export default Counter
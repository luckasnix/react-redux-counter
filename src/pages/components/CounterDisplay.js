import React from 'react'
import styles from './CounterDisplay.module.css'

function CounterDisplay(props) {
  return (
    <p className={styles.display}>{props.display}</p>
  )
}

export default CounterDisplay
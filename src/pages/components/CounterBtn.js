import React from 'react'
import styles from './CounterBtn.module.css'

function CounterBtn(props) {
  return (
    <button className={styles.btn} onClick={props.clicked}>{props.title}</button>
  )
}

export default CounterBtn
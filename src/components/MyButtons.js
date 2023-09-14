import React from 'react'
import styles from './styles.module.css'

export default function MyButtons({type, text}) {
  return (
    <button type={`submit ${styles[type]}`} className={`btn ${styles[type]}`}>{text}</button>
  )
}

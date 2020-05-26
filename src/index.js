import React from 'react'
import styles from './styles.module.css'
import Sugestion from './Sugestion'
import Sugestions from './Sugestions'
import InputAutoSugest from './InputAutoSugest'

export { Sugestion, Sugestions }

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default InputAutoSugest
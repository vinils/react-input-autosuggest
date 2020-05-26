import React from 'react'
import styles from './styles.module.css'
import Sugestion from './Suggestion'
import Sugestions from './Suggestions'
import InputAutoSuggest from './InputAutoSuggest'

export { Sugestion, Sugestions }

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default InputAutoSuggest
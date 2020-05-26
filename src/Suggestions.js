import React, { Component } from 'react'
import Suggestion from './Suggestion'

const style = {
  position: 'absolute',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  border: '1px solid #f1f1f1',
  borderTop: 0,
  borderRadius: '3px',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  maxHeight: 'calc(~"100vh - 100px")',
  maxWidth: '300px',
  overflowY: 'auto',
  backgroundColor: 'rgba(255,255,255,1)',
  textAlign: 'left',
  // bug when position absolute and under center tag, center is ignored
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0
  // end bug position
}

const UlCons = (props) => {
  return <ul style={{ ...style, ...props.style }}>{props.children}</ul>
}

export default class Suggestions extends Component {
  castToSuggestionItems(items, activedIdx, onClick) {
    return items.map((item, idx) => (
      <Suggestion
        key={idx}
        actived={activedIdx === idx}
        onClick={() => onClick(idx)}
      >
        {item.getSuggestion()}
      </Suggestion>
    ))
  }

  render() {
    const { children, onClick, activedIndex, style } = this.props

    return (
      <UlCons style={style}>
        {this.castToSuggestionItems(children, activedIndex, onClick)}
      </UlCons>
    )
  }
}

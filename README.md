![Node.js CI](https://github.com/vinils/react-input-autosuggest/workflows/Node.js%20CI/badge.svg) [![NPM](https://img.shields.io/npm/v/react-input-autosuggest.svg)](https://www.npmjs.com/package/react-input-autosuggest) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# react-input-autosuggest

> An atuo suggestion search box

[![react-input-autosuggest](https://github.com//vinils/react-input-autosuggest/blob/master/public/sample.gif?raw=true)](https://github.com/vinils/react-input-autosuggest/)

Demo and playground available [here](https://vinils.github.io/react-input-autosuggest/)

## Install

```bash
npm install --save react-input-autosuggest
```

## Usage

```jsx
import React, { Component } from 'react'

import InputAutoSuggest from 'react-input-autosuggest'
import 'react-input-autosuggest/dist/index.css'

class Example extends Component {
  render() {
    return <InputAutoSuggest
              size="20"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              data={['aa','bb','cc']}/>
  }
```

## License

MIT © [vinils](https://github.com/vinils)

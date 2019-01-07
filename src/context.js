/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_THEME_PRIMARY':
    return {
      ...state,
      theme: action.payload
    }
  default:
    return state
  }
}

export class Provider extends Component {
  state = {
    theme: { primary: 'red' },
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render () {
    const { children } = this.props
    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          {children}
        </ThemeProvider>
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer

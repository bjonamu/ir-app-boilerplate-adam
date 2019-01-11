import React from 'react'
import { withState, compose, withHandlers } from 'recompose'

const Context = React.createContext()

const localStorage = window.localStorage

const ThemeContext = ({ children, theme, toggleTheme }) => (
  <Context.Provider value={{ theme, toggleTheme }}>
    {children}
  </Context.Provider>
)

export default compose(
  withState('theme', 'setTheme', localStorage.getItem('theme') || 'light'),
  withHandlers({
    toggleTheme: ({ theme, setTheme }) => () => {
      const nextValue = theme === 'dark' ? 'light' : 'dark'
      setTheme(nextValue)
      localStorage.setItem('theme', nextValue)
    }
  })
)(ThemeContext)

export const ThemeConsumer = Context.Consumer

import React from 'react'

export const Context = React.createContext()

class ThemeContext extends React.Component {
  state = { 
    theme: 'light'
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'dark' ? 'light' : 'dark'
    }))
  }

  render() {
    return (
      <Context.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const ThemeConsumer = Context.Consumer

export default ThemeContext

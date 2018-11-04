import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import reduxStore from './Redux'
import PrimaryLayout from './Layouts/PrimaryLayout'

import ThemeContext, { ThemeConsumer } from './Services/ThemeContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/GlobalStyle'
import * as themes from './Styles/Themes'

const { persistor, store } = reduxStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={onBeforeLift}
          loading={<h3>Loading...</h3>}
        >
          <ThemeContext>
            <BrowserRouter>
              <ThemeConsumer>
                {
                  ({ theme }) => (
                    <ThemeProvider theme={themes[theme]}>
                      <Fragment>
                        <PrimaryLayout />
                        <GlobalStyle />
                      </Fragment>
                    </ThemeProvider>
                  )
                }
              </ThemeConsumer>
            </BrowserRouter>
          </ThemeContext>
        </PersistGate>
      </Provider>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import reduxStore from './Redux'
import PrimaryLayout from './Layouts/PrimaryLayout'

const { persistor, store } = reduxStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<h3>Loading...</h3>}
          onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <BrowserRouter>
            <PrimaryLayout />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App

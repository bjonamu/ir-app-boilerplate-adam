import React from 'react'
import { render } from 'react-snapshot'
import DevConfig from './Config/DevConfig'
import App from './App'
import * as serviceWorker from './serviceWorker'

/**
 * Why did you update is a function that monkey patches React and
 * notifies you in the console when potentially unnecessary re-renders occur.
 */
if (DevConfig.__DEV__ && DevConfig.whyDidYouUpdateLogging) {
  import('why-did-you-update')
    .then(({ whyDidYouUpdate }) => {
      whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: false })
    })
    .catch(error => {
      console.log('why-did-you-update ERROR', error)
    })
}

const rootEl = document.getElementById('root')
render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

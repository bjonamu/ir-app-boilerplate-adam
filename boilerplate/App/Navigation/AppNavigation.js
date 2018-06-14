import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

// Custom
import Routes from './Routes'
import NoMatch from '../Routes/NoMatch'
import AppConfig from '../Config/AppConfig'

const AppNavigation = () => (
  <Router>
    <Fragment>
      <Helmet
        defaultTitle={AppConfig.appName}
        titleTemplate={`${AppConfig.appName}  | %s`}
      />
      <Switch>
        {Routes.map((route, i) => <Route key={i} {...route} />)}
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  </Router>
)

export default AppNavigation

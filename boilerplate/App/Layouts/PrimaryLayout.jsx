import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Main from '../Components/Main/Main'
import UsersLayout from './UsersLayout'

const PrimaryLayout = props => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/users' component={UsersLayout} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  )
}

export default PrimaryLayout

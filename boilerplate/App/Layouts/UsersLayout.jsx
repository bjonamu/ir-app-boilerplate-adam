import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

const UsersList = ({ match }) => (
  <div>UsersList</div>
)

const AddUser = ({ match }) => (
  <div>AddUser</div>
)

const EditUser = ({ match }) => (
  <div>EditUser</div>
)

const UserProfile = ({ match }) => (
  <div>UserProfile</div>
)

const UsersLayout = ({ match }) => (
  <Fragment>
    <div className='primary-content'>
      <Switch>
        <Route exact path={match.path} component={UsersList} />
        <Route path={`${match.path}/add`} component={AddUser} />
        <Route path={`${match.path}/:userId/edit`} component={EditUser} />
        <Route path={`${match.path}/:userId`} component={UserProfile} />
      </Switch>
    </div>
  </Fragment>
)

export default UsersLayout

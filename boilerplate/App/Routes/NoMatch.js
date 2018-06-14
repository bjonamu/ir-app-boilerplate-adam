import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { FluidPage } from '../Layouts'

export default () => (
  <FluidPage>
    <Link to='/'>
      <p>Whoops! Nothing to see here!</p>
    </Link>
    <Helmet title='404' />
  </FluidPage>
)

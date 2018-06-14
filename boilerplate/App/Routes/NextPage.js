import React from 'react'
import Helmet from 'react-helmet'

import Colors from '../Themes/Colors'
import { FluidPage } from '../Layouts'

export default () => (
  <FluidPage background={Colors.snow}>
    <Helmet title='Next Page' />
  </FluidPage>
)

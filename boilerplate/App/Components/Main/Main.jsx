import React from 'react'
import Helmet from 'react-helmet'

import Fluid from '../Fluid/Fluid'

const Main = (props) => {
  return (
    <Fluid>
      <h2 className='app-name'>{'{ignite-react-app}'}</h2>
      <div className='container__item landing-page-container'>
        <div className='content__wrapper'>
          <div className='ellipses-container'>
            <h2 className='greeting'>Hello</h2>
            <div className='ellipses ellipses__outer--thin'>
              <div className='ellipses ellipses__orbit' />
            </div>
            <div className='ellipses ellipses__outer--thick' />
          </div>
        </div>
      </div>
      <Helmet title='Home' />
    </Fluid>
  )
}

export default Main

import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>
      <p>Button Component</p>
    </div>
  )
}

Button.defaultProps = {
  name: 'Name'
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
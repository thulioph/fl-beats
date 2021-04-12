import React from 'react'
import PropTypes from 'prop-types'

const ShouldRender = ({ when, children }) => {
  if (!when) return null

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

ShouldRender.propTypes = {
  children: PropTypes.node.isRequired,
  when: PropTypes.bool.isRequired
}

export default ShouldRender
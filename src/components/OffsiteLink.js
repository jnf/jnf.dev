import React from 'react'
import PropTypes from 'prop-types'

export const OffsiteLink = ({ href, children }) =>
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>

OffsiteLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

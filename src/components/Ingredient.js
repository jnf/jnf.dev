import React from 'react'
import PropTypes from 'prop-types'

export const Ingredient = ({ value, scale, text }) => {
  return <li>{value}{scale} {text}</li>
}

Ingredient.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.string,
  text: PropTypes.string,
}

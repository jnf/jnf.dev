import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const ContentLicense = ({ path = '#', title }) =>
  <div className='license-content'>
    <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
      <img
        alt='Creative Commons License'
        src='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'
      />
    </a>
    <em>{title}</em> by <a href='https://jnf.dev'>jnf</a> is licensed under a
    <br />
    <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
      Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
    </a>.
    <br />
    <Link to={path}>Based on this original work.</Link>
  </div>

ContentLicense.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.required
}

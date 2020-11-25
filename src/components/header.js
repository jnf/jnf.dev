import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Navigation } from '../components/nav'
import jnfImage from '../images/jnf.jpg'

const Header = ({ siteTitle }) => (
  <header>
    <Link to='/' className='header-link'>
      <h1 className='header-title'>
        <img
          src={jnfImage}
          className='header-avatar'
          alt='photo of jnf looking all snazzy'
        />
        {siteTitle}
      </h1>
    </Link>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

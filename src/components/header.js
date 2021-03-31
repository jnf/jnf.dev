import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Navigation } from '../components/nav'
import { Connect } from '../components/Connect'
import jnfImage from '../images/jnf.jpg'

const Header = ({ siteTitle }) =>
  <div className='site-sidebar'>
    <header className='site-sidebar--header'>
      <Link to='/' className='site-sidebar--header__avatar'>
        <img
          src={jnfImage}
          alt='cute photo of jnf'
        />
      </Link>
      <Link to='/' className='site-sidebar--header__title'>
        <h1>{siteTitle}</h1>
      </Link>
      <Connect />
    </header>
    <div className='site-sidebar--header__nav'><Navigation /></div>
  </div>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

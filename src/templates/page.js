import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/layout.scss'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className='site'>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './page'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }

  }
`

const Template = ({
  data: {
    site,
    markdownRemark: {
      html,
      frontmatter: {
        date,
        title
      }
    }
  }
}) =>
  <Layout>
    <article className='talk'>
      <h1>{title}<span>{date}</span></h1>
      <section
        className='talk-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  </Layout>

Template.propTypes = {
  data: PropTypes.node.isRequired
}

export default Template

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './page'
import Seo from '../components/seo'
import { ContentLicense } from '../components/license'

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        location
        path
        title
        venue
      }
    }
  }
`

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        date,
        location,
        path,
        title,
        venue,
      }
    }
  }
}) =>
  <Layout>
    <Seo title={title} />
    <article className='talk'>
      <h1>
        {title}
        <span className='talk-venue'>{venue}</span>
        <span className='talk-location'>{location}</span>
        <span className='talk-date'>{date}</span>
      </h1>
      <section
        className='talk-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ContentLicense
        title={title}
        path={path}
      />
    </article>
  </Layout>

Template.propTypes = {
  data: PropTypes.node.isRequired
}

export default Template

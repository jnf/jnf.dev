import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './page'
import Seo from '../components/seo'
import { ContentLicense } from '../components/license'

export const pageQuery = graphql`
  query($path: String!) {
    site {
      host
      port
    }
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

const urlBuilder = ({ host, path, port }) => port
  ? `//${host}:${port}${path}`
  : `//${host}${path}`

const Template = ({
  data: {
    site: { host, port },
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
        path={urlBuilder({ host, port, path })}
      />
    </article>
  </Layout>

Template.propTypes = {
  data: PropTypes.node.isRequired
}

export default Template

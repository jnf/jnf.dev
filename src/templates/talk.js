import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from './page'
import { Seo } from '../components/Seo'

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        category
        date(formatString: "DD MMMM YYYY")
        description
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
    mdx: {
      body,
      frontmatter: {
        category,
        date,
        location,
        title,
        venue,
        description,
      }
    }
  }
}) =>
  <Layout>
    <Seo title={title} description={description} />
    <article className={`site-primary ${category.toLowerCase()} talk`}>
      <section className='talk-title'>
        <h1>
          {title}
          {venue && location && <span><em>{venue}</em> || {location}</span>}
          <span>{date}</span>
        </h1>
      </section>
      <section className='talk-content'>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </article>
  </Layout>

Template.propTypes = {
  data: PropTypes.object.isRequired
}

export default Template

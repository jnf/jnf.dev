import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from './page'
import { Seo } from '../components/Seo'

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
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
  children,
  data: {
    mdx: {
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
        {children}
      </section>
    </article>
  </Layout>

Template.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default Template

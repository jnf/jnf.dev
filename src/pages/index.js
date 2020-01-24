import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../templates/page'
import Seo from '../components/seo'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const talks = allMarkdownRemark.edges.reduce((acc, { node: { frontmatter, fields } }) => ([
    ...acc,
    [frontmatter.title, fields.slug]
  ]), [])

  return (
    <Layout>
      <Seo title='jnf.dev: where jnf talks about dev' />
      <article className='static-page'>
        <section>
          <h2>Hello</h2>
          <p>
            There's not much to see right now.
          </p>
        </section>
        <aside>
          <h3>Table of Contents</h3>
          <nav>
            <h4>Pages</h4>
            <ul>
              <li><Link to='/' replace>Home</Link></li>
            </ul>
          </nav>
          <nav>
            <h4>Presentations</h4>
            <ul>
              {talks.map(([title, path]) => <li key={path}><Link to={path} replace>{title}</Link></li>)}
            </ul>
          </nav>
          <nav>
            <h4>External Links</h4>
            <ul>
              <li><a href='https://twitter.com/_jnf'>@_jnf</a></li>
              <li><a href='https://www.linkedin.com/in/jeremyf/'>LinkedIn</a></li>
            </ul>
          </nav>
        </aside>
      </article>
    </Layout>
  )
}

export default IndexPage

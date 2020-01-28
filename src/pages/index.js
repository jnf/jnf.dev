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
              venue
              date
            }
          }
        }
      }
    }
  `)

  const talks = allMarkdownRemark.edges.reduce((acc, { node: { frontmatter, fields } }) => ([
    ...acc,
    [frontmatter, fields.slug]
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
          <nav className='links'>
            <h4>Pages</h4>
            <ul>
              <li><Link to='/' replace>Home</Link></li>
            </ul>
          </nav>
          <nav className='links'>
            <h4>Presentations</h4>
            <ul>
              {talks.map(([{ title, venue, date }, path]) =>
                <li key={path}>
                  <Link to={path} replace>{title}</Link>
                  <small style={{ display: 'block' }}>{venue}, {date}</small>
                </li>
              )}
            </ul>
          </nav>
          <nav className='links'>
            <h4>External Links</h4>
            <ul>
              <li className='links-icon twitter'><a href='https://twitter.com/_jnf'>@_jnf</a></li>
              <li className='links-icon github'><a href='https://www.github.com/jnf/'>jnf</a></li>
              <li className='links-icon linkedin'><a href='https://www.linkedin.com/in/jeremyf/'>jeremyf</a></li>
            </ul>
          </nav>
        </aside>
      </article>
    </Layout>
  )
}

export default IndexPage

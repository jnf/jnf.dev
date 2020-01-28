import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const Navigation = () => {
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
              date(formatString: "DD MMMM YYYY")
              location
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
    <aside>
      <nav className='links'>
        <h4>Pages</h4>
        <ul>
          <li><Link to='/' replace>Home</Link></li>
        </ul>
      </nav>
      <nav className='links'>
        <h4>Presentations</h4>
        <ul>
          {talks.map(([{ title, venue, date, location }, path]) =>
            <li key={path}>
              <Link to={path} replace>{title}</Link>
              <small style={{ display: 'block' }}>{venue}, {location}, {date}</small>
            </li>
          )}
        </ul>
      </nav>
      <nav className='links'>
        <h4>External Links</h4>
        <ul>
          <li className='links-icon twitter'><a href='https://twitter.com/_jnf'>@_jnf</a></li>
          <li className='links-icon github'><a href='https://www.github.com/jnf/'>jnf</a></li>
          <li className='links-icon linkedin'><a href='https://www.linkedin.com/in/jeremyf/'>-jnf</a></li>
        </ul>
      </nav>
    </aside>
  )
}

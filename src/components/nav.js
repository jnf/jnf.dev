import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import twitterIcon from '../images/twitter.svg'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'

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
        <h4>Connect</h4>
        <ul className='links-connect'>
          {
            Object.entries({
              Twitter: ['https://twitter.com/_jnf', twitterIcon],
              Github: ['https://www.github.com/jnf/', githubIcon],
              LinkedIn: ['https://www.linkedin.com/in/-jnf/', linkedinIcon],
            }).map(([service, [href, icon]]) =>
              <li key={`link-${service}`}>
                <a className='links-connect__link' target='_blank' rel='noopener noreferrer' href={href}>
                  <img className='links-connect__icon' src={icon} alt={`icon for ${service}`} />
                </a>
              </li>
            )
          }
        </ul>
      </nav>
    </aside>
  )
}

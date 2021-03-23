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
              category
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

  const navs = allMarkdownRemark.edges.reduce((acc, { node: { frontmatter, fields } }) => {
    const { category, title, venue, date, location } = frontmatter
    const { slug } = fields
    acc[category] = (acc[category] || [])
    acc[category].push({ title, venue, date, location, slug })
    return acc
  }, {})

  const categories = Object.keys(navs).sort()

  return (
    <aside>
      <nav className='links'>
        {categories.map(category =>
          <React.Fragment key={`links-category-${category}`}>
            <h4>{category}</h4>
            <ul>
              {navs[category].map(({ title, venue, date, location, slug }) =>
                <li key={slug}>
                  <Link to={slug} replace>{title}</Link>
                  <small style={{ display: 'block' }}>
                    {venue && location && `${venue}, ${location}, `}{date}
                  </small>
                </li>
              )}
            </ul>
          </React.Fragment>
        )}
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

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import twitterIcon from '../images/twitter.svg'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import discogsIcon from '../images/discogs.svg'

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

  const [visible, setVisible] = useState(false)

  return (
    <aside>
      <button onClick={() => setVisible(!visible)} className='links-toggle'>
        toggle site navigation
      </button>
      <nav className={`links ${visible ? 'visible' : ''}`}>
        {categories.map(category =>
          <React.Fragment key={`links-category-${category}`}>
            <h4 className='links-category-title'>{category}</h4>
            <ul className='links-category-list'>
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
      <nav className='links-social'>
        <h4>Connect</h4>
        <ul className='links-connect'>
          {
            Object.entries({
              Twitter: ['https://twitter.com/_jnf', twitterIcon],
              Github: ['https://www.github.com/jnf/', githubIcon],
              Discogs: ['https://www.discogs.com/user/jnf', discogsIcon],
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

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const Navigation = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx {
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

  const navs = allMdx.edges.reduce((acc, { node: { frontmatter, fields } }) => {
    const { category, title, venue, date, location } = frontmatter
    const { slug } = fields
    acc[category] = (acc[category] || [])
    acc[category].push({ title, venue, date, location, slug })
    return acc
  }, {})

  const categories = Object.keys(navs).sort()

  const [visible, setVisible] = useState(false)

  return (
    <>
      <button onClick={() => setVisible(!visible)} className='links-toggle'>
        toggle site navigation
      </button>
      <nav className={`links ${visible ? 'visible' : ''}`}>
        {categories.map(category =>
          <React.Fragment key={`links-category-${category}`}>
            <h4 className='links-category--title'>{category}</h4>
            <ul className='links-category--list'>
              {navs[category].map(({ title, venue, date, location, slug }) =>
                <li key={slug}>
                  <Link to={slug} replace>{title}</Link>
                  <small>
                    {venue && location && `${venue}, ${location}, `}
                    {venue && location && <br />}
                    {date}
                  </small>
                </li>
              )}
            </ul>
          </React.Fragment>
        )}
      </nav>
    </>
  )
}

import React from 'react'
import twitterIcon from '../images/twitter.svg'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import discogsIcon from '../images/discogs.svg'

export const Connect = () =>
  <nav className='site-sidebar--header__connect'>
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

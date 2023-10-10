import React from 'react'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import discogsIcon from '../images/discogs.svg'
import bandcampIcon from '../images/bandcamp.svg'

export const Connect = () =>
  <nav className='site-sidebar--header__connect'>
    <ul className='links-connect'>
      {
        [
          ['Bandcamp', 'https://bandcamp.com/jnf', bandcampIcon],
          ['Github', 'https://www.github.com/jnf/', githubIcon],
          ['Discogs', 'https://www.discogs.com/user/jnf', discogsIcon],
          ['LinkedIn', 'https://www.linkedin.com/in/-jnf/', linkedinIcon],
        ].map(([service, href, icon]) =>
          <li key={`link-${service}`}>
            <a className='links-connect__link' target='_blank' rel='noopener noreferrer' href={href}>
              <img className='links-connect__icon' src={icon} alt={`icon for ${service}`} />
            </a>
          </li>
        )
      }
    </ul>
  </nav>

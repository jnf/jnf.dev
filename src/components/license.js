import React from 'react'

export const ContentLicense = () =>
  <aside className='license-content'>
    This content by <a href='https://jnf.dev'>jnf</a> is licensed under a
    {' '}
    <a
      rel='license noopener noreferrer'
      href='http://creativecommons.org/licenses/by-nc-sa/4.0/'
      target='_blank'
    >
      Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
    </a>.
    <a
      rel='license noopener noreferrer'
      href='http://creativecommons.org/licenses/by-nc-sa/4.0/'
      target='_blank'
    >
      <img
        alt='Creative Commons License'
        src='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'
      />
    </a>
    All other rights reserved. © {new Date().getFullYear()}, Built with {' '}
    <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'>
      Gatsby
    </a>
  </aside>

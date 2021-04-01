import React from 'react'

import { OffsiteLink } from 'components/OffsiteLink'

export const Footer = () =>
  <footer className='license-content'>
    This content by <a href='https://jnf.dev'>jnf</a> is licensed under a {' '}
    <OffsiteLink href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
      Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
    </OffsiteLink>.
    <OffsiteLink href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
      <img
        alt='Creative Commons License'
        src='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'
      />
    </OffsiteLink>
    All other rights reserved. © {new Date().getFullYear()}
    <br />
    Built with <OffsiteLink href='https://www.gatsbyjs.org'>Gatsby</OffsiteLink>.
    Hosted on <OffsiteLink href='https://www.netlify.com/'>Netlify</OffsiteLink>.
    Source code available on <OffsiteLink href='https://github.com/jnf/jnf.dev'>Github</OffsiteLink>.
  </footer>

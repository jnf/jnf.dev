import React from 'react'

import Layout from '../templates/page'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='jnf.dev: where jnf talks about dev' />
      <article className='site-primary'>
        <section>
          <h2>Hello</h2>
          <p>
            There's not much to see right now.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage

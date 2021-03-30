import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const DescribedImage = ({ children, caption }) =>
  <figure className='gatsby-resp-image-figure'>
    {children}
    <figcaption className='gatsby-resp-image-figcaption'>
      <ReactMarkdown>{caption}</ReactMarkdown>
    </figcaption>
  </figure>

DescribedImage.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
}

export default DescribedImage

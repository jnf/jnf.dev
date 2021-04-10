import React from 'react'
import PropTypes from 'prop-types'

const videoConfig = {
  autoplay: 0, // no autoplay, only load
  cc_load_policy: 1, // cc is dope
  modestbranding: 1, // logos are distracting
  rel: 0, // no randos
}

export const Tuber = ({ id, customConfig = {} }) => {
  const src = new URL(`https://www.youtube-nocookie.com/embed/${id}`)

  Object.entries({
    ...videoConfig,
    ...customConfig,
  }).forEach(([k, v]) => { src.searchParams.append(k, v) })

  return (
    <div className='tuber'>
      <iframe
        src={src.href}
        title='YouTube video player'
        frameBorder='0'
        allow='clipboard-write; encrypted-media; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

Tuber.propTypes = {
  id: PropTypes.string.isRequired,
  customConfig: PropTypes.object,
}

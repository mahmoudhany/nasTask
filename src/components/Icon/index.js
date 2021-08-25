import React from 'react'

function Icon({ src, className, alt }) {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default Icon

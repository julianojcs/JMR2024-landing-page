import React from 'react'
import Image from 'next/image'

const DynamicImage = ({ src, alt, className, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority
    />
  )
}

export default DynamicImage
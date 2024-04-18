import React from 'react';

const ImageFetcher = ({src, alt}) => {
  return (
    <div>
        <img className='h-60 md:h-52 hover:scale-110 transition duration-100' src={src} alt={alt}/>
    </div>
  )
}

export default ImageFetcher
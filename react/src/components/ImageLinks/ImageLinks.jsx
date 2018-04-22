import React from 'react';

const ImageLinks = ({ images, hasError, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        Loading...
        <div className="index-loading-spinner">
          <span className="fas fa-spinner fa-pulse"></span>
        </div>
      </div>
    )
  }
  
  if (hasError) {
    return (
      <div>
        There has been an Error! 
      </div>
    )
  }

  return (
    //show first ten links
    <div className="center">
      {images.map((image, i) => {
        if (i > 0 && i <= 10) {
          return (
            <a
              style={{padding: 10, display: 'block'}} 
              href={image.post_url} 
              key={i}>
              {i}: {image.post_url}
            </a>
          )
        }
      })}
    </div>
  )
}

export default ImageLinks;
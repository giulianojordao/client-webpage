import React from 'react';

const isLoading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <div className="index-loading-spinner">
          <span className="fas fa-circle-notch fa-pulse"></span>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default isLoading
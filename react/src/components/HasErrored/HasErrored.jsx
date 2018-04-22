import React from 'react';

const hasErrored = ({ hasErrored }) => {
  if (hasErrored) {
    return (
      <div>
        There has been an unexpected error getting assets! 
      </div>
    )
  } else {
    return null
  }
}

export default hasErrored
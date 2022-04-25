import React from 'react';
import './MovieInfo.css';

export const MovieInfo = ({ activate }) => {
  return (
    <div>
      {activate && <div className='movie'>MovieInfo</div>}
    </div>
  )
};

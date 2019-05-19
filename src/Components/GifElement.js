import React from 'react';

const GifElement = ({ gif }) => {
  return (
    <li>
      <img src={gif.images.downsized.url} alt="gif searched"/>
    </li>
  )
};

export default GifElement;
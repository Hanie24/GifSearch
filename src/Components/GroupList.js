import React from 'react';
import GifElement from './GifElement';

const GroupList = ({ gifs }) => {
  const gifItems = gifs.map(gif => <GifElement key={gif.id} gif={gif} />);

  return (
    <ul>{gifItems}</ul>
  );
};

export default GroupList;
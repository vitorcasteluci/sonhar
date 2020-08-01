import React from 'react';

export const Quotes = (props) => {
  const { src } = props
  return (
    <div>
      <img src={src} alt="quote" />
    </div>
  )
}


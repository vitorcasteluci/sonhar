import React from 'react';
import styled from 'styled-components';


export const Quotes = (props) => {
  const { src } = props
  return (
    <div>
      <img src={src} alt="quote" />
    </div>
  )
}


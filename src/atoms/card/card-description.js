import React from 'react';
import { StyledCardDescription } from './styles';

const CardDescription = (props) => {
  return (
    <StyledCardDescription {...props}> {props.children} </StyledCardDescription>
  );
};

export default CardDescription;

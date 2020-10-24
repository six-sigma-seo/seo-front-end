import React from 'react';
import { StyledInput } from './styles';

const Input = (props) => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};
export default Input;

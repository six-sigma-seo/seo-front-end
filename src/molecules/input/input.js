import React from 'react';
import { StyledInput } from './styles';
// import Icon from '../../atoms/icon/icon';

const Input = (props) => {
  return (
    <StyledInput {...props} placeholder='Enter your proyect here'>
      {props.children}
    </StyledInput>
  );
};
export default Input;

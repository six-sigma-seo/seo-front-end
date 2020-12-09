import React from 'react';
import { CardContainer } from './styles';

function cardDown (props) {
  return (
    <>
      <CardContainer>
          {props.children}
      </CardContainer>
    </>
  );
}

export default cardDown;

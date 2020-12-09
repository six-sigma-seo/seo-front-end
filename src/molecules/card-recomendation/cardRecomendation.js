import React from 'react';
import { CardContainer } from './styles';

function cardRecomendation (props) {
  return (
    <>
      <CardContainer>
          {props.children}
      </CardContainer>
    </>
  );
}

export default cardRecomendation;

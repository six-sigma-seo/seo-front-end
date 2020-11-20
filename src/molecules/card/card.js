import React, { Fragment } from 'react';
import { CardContainer, DescriptionCardContainer } from './styles';
import FemaleSkater from '../../assets/SVG/femaleSkater';

function card(props) {
  return (
    <>
      <CardContainer>
        <FemaleSkater />
        <DescriptionCardContainer {...props}>
          {props.children}
        </DescriptionCardContainer>
      </CardContainer>
    </>
  );
}

export default card;

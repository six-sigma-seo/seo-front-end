import React from 'react';
import { CardContainer, DescriptionCardContainer } from './styles';
import FemaleSkater from '../../assets/SVG/femaleSkater';

function CardFeature({feature,soon}) {

  return (
    <>
      <CardContainer soon={soon}>
        <FemaleSkater/>
        <DescriptionCardContainer feature={feature}>
          <p>{feature}</p>
        </DescriptionCardContainer>
      </CardContainer>
    </>
  );
}

export default CardFeature;

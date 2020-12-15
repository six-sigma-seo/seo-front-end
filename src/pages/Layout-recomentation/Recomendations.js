import React from 'react';
import { StyledLayout, StyledTitle, StyledTestSection } from '../Layout/styles';

import { Menu } from '../../molecules/menu/menu';
import { GlobalStyle } from '../../App';

import { CardRecomendation } from '../../molecules/card-recomendation/cardRecomendation';
import { CardDown } from '../../molecules/card-down/cardDown';
import { FeatureShow } from '../../molecules/feature-show/featureShow';
import { Alternativas } from '../../molecules/features/alternativas/alternativas';
import { Jerarquias } from '../../molecules/features/jerarquias/jerarquias';
import { Meta } from '../../molecules/features/meta/meta';
import { Titulo } from '../../molecules/features/titulo/titulo';

export const Recomendations = (props) => {
  return (
    <>
      <GlobalStyle primary />
      <StyledLayout>
        <div></div>
        <Menu />
        <StyledTitle>Titulo</StyledTitle>

        <StyledTestSection>
          <CardRecomendation />
        </StyledTestSection>
      </StyledLayout>
    </>
  );
};

import React from 'react';
import {
  StyledLayout,
  StyledTitle,
  StyledTestSection,
} from '../Layout-Tests/styles';

import { Menu } from '../../molecules/menu/menu';
import { GlobalStyle } from '../../App';

import { CardRecomendation } from '../../molecules/card-recomendation/cardRecomendation';
import { Alternativas } from '../../molecules/features/alternativas/alternativas';
import { Arial } from '../../molecules/features/arial/arial';
import { Desuso } from '../../molecules/features/desuso/desuso';
import { Estructura } from '../../molecules/features/estructura/estructura';
import { Jerarquias } from '../../molecules/features/jerarquias/jerarquias';
import { Lenguaje } from '../../molecules/features/lenguaje/lenguaje';
import { Meta } from '../../molecules/features/meta/meta';
import { Titulo } from '../../molecules/features/titulo/titulo';

export const Recomendations = ({ feature }) => {
  return (
    <>
      <GlobalStyle primary />
      <StyledLayout>
        <div></div>
        <Menu />
        <StyledTitle>Titulo</StyledTitle>

        <StyledTestSection>
          <CardRecomendation>
            <Alternativas />
          </CardRecomendation>
        </StyledTestSection>
      </StyledLayout>
    </>
  );
};

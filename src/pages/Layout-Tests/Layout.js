import React from 'react';
import { StyledLayout, StyledTitle, StyledTestSection } from './styles';

import { Menu } from '../../molecules/menu/menu';
import { GlobalStyle } from '../../App';

import { CardDown } from '../../molecules/card-down/cardDown';
import { FeatureShow } from '../../molecules/feature-show/featureShow';
import { Alternativas } from '../../molecules/features/alternativas/alternativas';
import { Jerarquias } from '../../molecules/features/jerarquias/jerarquias';
import { Meta } from '../../molecules/features/meta/meta';
import { Titulo } from '../../molecules/features/titulo/titulo';

export const Layout = (props) => {
  return (
    <>
      <GlobalStyle primary />
      <StyledLayout>
        <div></div>
        <Menu />
        <StyledTitle>Hola Mundo</StyledTitle>
        <CardDown />
        <StyledTestSection>
          <Meta />
          <Titulo />
          <FeatureShow />
          <Alternativas />
          <Jerarquias />
        </StyledTestSection>
      </StyledLayout>
    </>
  );
};

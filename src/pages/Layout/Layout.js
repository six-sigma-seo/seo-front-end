import React from 'react';
import { StyledStructurePages, StyledTestSection } from './styles';

import { Menu } from '../../molecules/menu/menu';
import { GlobalStyle } from '../../App';

export const Layout = (props) => {
  return (
    <>
      <GlobalStyle primary />
      <StyledStructurePages>
        <div></div>
        <Menu />
        <StyledTestSection />
      </StyledStructurePages>
    </>
  );
};

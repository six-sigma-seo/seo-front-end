import React from 'react';
import { GlobalStyle, StyledStructurePages, StyledTestSection } from './styles';

const pageStructure = (props) => {
  return (
    <>
      <GlobalStyle />
      <StyledStructurePages>
        <StyledTestSection />
      </StyledStructurePages>
    </>
  );
};

export default pageStructure;

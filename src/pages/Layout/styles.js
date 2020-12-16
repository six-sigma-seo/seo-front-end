import styled, { css } from 'styled-components';

const StyledStructurePages = styled.div`
  display: grid;
  grid-template: 0.25fr 0.25fr 1fr/1fr 3fr;
  grid-template-areas:
    '. . menu'
    'general-data title'
    'general-data test';

  min-height: 100vh;
  min-width: 100vw;

  padding: 0 2.5%;
  margin: 0;

  box-sizing: border-box;
`;

const StyledTestSection = styled.div`
  grid-area: test;

  box-sizing: border-box;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 30px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export { StyledStructurePages, StyledTestSection };

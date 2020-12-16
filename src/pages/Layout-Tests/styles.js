import styled, { css } from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template: 0.25fr 0.25fr 1fr 0.25fr/1fr 3fr;
  grid-template-areas:
    '. menu'
    'general-data title'
    'general-data test'
    '. test';

  min-height: 100vh;
  min-width: 100vw;

  padding: 0 2.5%;
  margin: 0;

  box-sizing: border-box;
`;
export const StyledTitle = styled.h1`
  grid-area: title;

  margin: auto;

  font-family: inherit;

  color: white;
`;
export const StyledTestSection = styled.div`
  grid-area: test;

  margin-bottom: 2.5vh;

  overflow-y: scroll;
  box-sizing: border-box;
  /* overflow: hidden; */

  ::-webkit-scrollbar {
    width: 30px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

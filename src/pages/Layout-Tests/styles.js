import styled, { css } from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template: 0.25fr 0.25fr 1fr 0.25fr/1fr 3fr;
  grid-template-areas:
    '. menu'
    'general-data title'
    'general-data test'
    '. test';

  max-height: 100vh;
  max-width: 100vw;

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

  display: grid;
  grid-template: 1fr/1fr;

  width: 100%;
  max-height: inherit;

  margin-bottom: 2.5vh;

  overflow-y: scroll;

  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 7.5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5943be;
    border-radius: 5px;
  }
`;

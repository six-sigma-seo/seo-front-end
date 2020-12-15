import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;

  color: #fff;

  grid-template: 100vh / 1fr minmax(auto, 1440px) 1fr;
  grid-template-areas: '. wrapper .';

  box-sizing: border-box;
`;

export const StyledWrapper = styled.div`
  grid-area: wrapper;

  display: grid;
  align-content: space-between;

  box-sizing: border-box;
`;

export const StyledCardContainer = styled.div`
  /* display: flex; */
  display: inline;
  & > h2 {
    color: #fff;
    text-align: center;
  }
`;

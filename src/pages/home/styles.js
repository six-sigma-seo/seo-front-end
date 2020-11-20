import styled from 'styled-components';
import Bg from './Rectangle.svg';

const StyledLayout = styled.div`
  display: grid;
  grid-template: 100vh/1fr minmax(auto, 1100px) 1fr;
  grid-template-areas: '. wrapper .';
  place-self: center;
  background: url(${Bg}) no-repeat center center fixed;
  background-size: cover;

  max-width: 100vw;
  max-height: 100vh;
`;

const StyledWrapper = styled.div`
  grid-area: wrapper;
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-sizing: border-box;
`;

export { StyledLayout, StyledWrapper, StyledCardContainer };

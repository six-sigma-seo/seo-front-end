import styled, { css } from 'styled-components';
import Electronics from './Electronics.svg';

const StyledHero = styled.div`
  display: grid;
  grid-template: 1fr/1fr 1fr;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: transparent;
  border: 1px solid black;
`;

const StyledImage = styled.div.attrs((props) => ({
  size: props.size || '1em ',
}))``;

const StyledInfo = styled.div.attrs((props) => ({
  size: props.size || '1em ',
}))`
  display: grid;
  grid-template: auto auto auto/1fr;
  height: calc(100% - 5%);
  width: 100%;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  && h1 {
    width: 75%;
    font-size: 4em;
    ${'' /* font-size: 60px; */}
    font-weight: 600;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  && p {
    font-size: 1em;
  }
`;

export { StyledHero, StyledImage, StyledInfo };

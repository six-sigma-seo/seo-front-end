import styled, { css } from 'styled-components';
import Electronics from './Electronics.svg';

const StyledHero = styled.div`
  display: grid;
  grid-template: 1fr/1fr 1.1fr;
  place-self: center;
  height: ${(props) => props.height};
  max-width: ${(props) => props.width};
  background: transparent;
  box-sizing: border-box;
  margin: 2.5vh auto;
  @media (max-width: 375px) {
    grid-template: repeat(2, minmax(auto, 1fr)) / auto;
  }
`;

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  place-self: center;
`;

const StyledInfo = styled.div.attrs((props) => ({
  size: props.size || '1em ',
}))`
  display: grid;
  grid-template: auto auto auto/1fr;
  height: calc(100% - 5%);
  width: 100%;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  -webkit-text-fill-color: white;

  & > h1 {
    width: 75%;
    font-size: 4em;
    font-weight: 600;
    ${'' /* -webkit-text-fill-color: white; */}
    ${'' /* -webkit-text-stroke-width: 1px; */}
    ${'' /* -webkit-text-stroke-color: black; */}
  }
  & > p {
    width: 60%;
    font-size: 1.25em;
    font-weight: lighter;
    padding-left: 10%;
  }
`;

export { StyledHero, StyledImage, StyledInfo };

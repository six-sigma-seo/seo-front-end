import styled, { css } from 'styled-components';

const StyledLayout = styled.div.attrs((props) => ({
  width: props.iconSize,
  height: props.iconSize,
}))`
  display: grid;

  color: #fff;
  max-width: ${(props) => props.size || '1rem'};
  max-height: ${(props) => props.size || '1rem'};

  & > svg {
    display: block;
    overflow: visible;
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`;

export { StyledLayout };

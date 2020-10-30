import styled, { css } from 'styled-components';

const StyledIcon = styled.span.attrs((props) => ({
  type: 'text',
  width: props.iconSize,
  height: props.iconSize,
}))`
  display: inline-block;
  color: #fff;
  width: ${(props) => props.size || '1rem'};
  height: ${(props) => props.size || '1rem'};

  & > svg {
    display: block;
    overflow: visible;
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`;

export { StyledIcon };

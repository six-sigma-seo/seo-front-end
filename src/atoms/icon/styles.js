import styled from 'styled-components';

const StyledIcon = styled.span`
  display: inline-block;
  color: #fff;
  ${'' /* height: 20px;
  width: 20px; */}

  & > svg {
    display: block;
    overflow: visible;
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`;

export { StyledIcon };

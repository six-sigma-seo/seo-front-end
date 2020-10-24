import styled, { css } from 'styled-components';

const StyledCardDescription = styled.div`
  display: flex;

  padding: 20px 0px 0px 20px;
  height: 180px;
  width: 970px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

  ${'' /* border: 1px solid black; */}

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(26, 49, 102, 0.25);
      color: #999;

      border-right: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-image: linear-gradient(
        to right,
        rgba(58, 19, 184, 1),
        rgba(162, 85, 255, 1)
      );
      border-image-slice: 30;
      ${'' /* borde-radius: 30px; */}
    `}
`;

export { StyledCardDescription };

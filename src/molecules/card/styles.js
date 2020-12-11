import styled, { css } from "styled-components";

const CardContainer = styled.div`
  
  position: relative;
  background: #427BFF;
  margin: 0 10px;
  max-width: 240px;
  border-radius: 30px;
  height: 297px;
  text-align: center;
  ${props =>
    props.soon &&
    css`
      filter: blur(4px);
      
    `}
  
`;

const DescriptionCardContainer = styled.div`
font-family: 'Open Sans', sans-serif;
  position: relative;
  padding: 0 auto;
  bottom: 132px;
  background: #000;
  opacity: .6;
  height: 149px;
  border-radius: 0 0px 30px 30px;
  backdrop-filter: blur(40px);
  & > p {
    color: #FFF;
    padding: 30px;
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  }
  
`;

export { CardContainer, DescriptionCardContainer };
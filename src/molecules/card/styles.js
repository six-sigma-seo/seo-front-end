import styled from "styled-components";

const CardContainer = styled.div`
  
  position: relative;
  background: #427BFF;
  margin: 50px;
  max-width: 240px;
  border-radius: 30px;
  height: 297px;
  text-align: center;
`;

const DescriptionCardContainer = styled.div`

  position: relative;
  bottom: 132px;
  background: #000;
  opacity: .6;
  height: 149px;
  border-radius: 0 0px 30px 30px;
  backdrop-filter: blur(40px);
  color: #FFF
  
  
`;


export { CardContainer, DescriptionCardContainer };
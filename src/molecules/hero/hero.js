import React from 'react';
import { StyledHero, StyledImage, StyledInfo } from './styles';
import Input from '../input/input';
// import Input from '../input/input';
import Electronics from './Electronics.svg';

function Hero(props) {
  return (
    <StyledHero {...props} height='auto' width='auto'>
      <StyledImage src={Electronics}>
        {/* <img as={StyledImage} src={Electronics} alt="Image of devices"> */}
      </StyledImage>
      <StyledInfo>
        <h1>Scrapy Your Proyect</h1>
        <p>Learn how you can improve your personal proyects</p>
        <Input></Input>
      </StyledInfo>
    </StyledHero>
  );
}

export default Hero;

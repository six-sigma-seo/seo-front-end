import React from 'react';
import { StyledHero, StyledImage, StyledInfo } from './styles';
// import Input from '../../atoms/input/input';

function Hero(props) {
  return (
    <StyledHero {...props} height='500px' width='1400px'>
      <StyledImage></StyledImage>
      <StyledInfo>
        <h1>Scrapy Your Proyect</h1>
        <p>Learn how you can improve your personal proyects</p>
        {/* <Input></Input> */}
      </StyledInfo>
    </StyledHero>
  );
}

export default Hero;

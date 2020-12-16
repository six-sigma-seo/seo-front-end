import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout, StyledWrapper, StyledCardContainer } from './styles';

import { Menu } from '../../molecules/menu/menu';
import { Hero } from '../../molecules/hero/hero';
import { Carousel } from '../../organisms/carousel';

export const Home = (props) => {
  return (
    <StyledLayout>
      <StyledWrapper>
        <Menu />
        <Hero />
        <CardContainer />
      </StyledWrapper>
    </StyledLayout>
  );
};

export const CardContainer = () => {
  return (
    <StyledCardContainer>
      <Carousel />
    </StyledCardContainer>
  );
};

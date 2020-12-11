import React from 'react';
import { Fragment } from 'react';
import { StyledLayout, StyledWrapper, StyledCardContainer } from './styles';
import Hero from '../../molecules/hero/hero';
import Carousel from '../../organisms/carousel';

export const Home = (props) => {
  return (
    <StyledLayout>
      <StyledWrapper>
        <Hero> </Hero>
        <CardContainer />
      </StyledWrapper>
    </StyledLayout>
  );
};

export const CardContainer = () => {
  return (
    <StyledCardContainer>
      <Carousel/>
    </StyledCardContainer>
  );
};

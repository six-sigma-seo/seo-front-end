import React from 'react';
import { Fragment } from 'react';
import { StyledLayout, StyledWrapper, StyledCardContainer } from './styles';
import Hero from '../../molecules/hero/hero';
import Card from '../../molecules/card/card';

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
      <Card />
      <Card />
      <Card />
    </StyledCardContainer>
  );
};

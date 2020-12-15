import React from 'react';
import { CarouselContainer } from './styles';
import CardFeature from '../molecules/card/card';

export const Carousel = () => {
  return (
    <>
      <h2>You can review:</h2>
      <CarouselContainer>
        <CardFeature feature='Alternativa en etiquetas img' />
        <CardFeature feature='Jeraquia textual' />
        <CardFeature feature='Uso semántico de HTML' />
        <CardFeature feature='Utilizacion de etiquetas deprecadas' />
        <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
      </CarouselContainer>
    </>
  );
};

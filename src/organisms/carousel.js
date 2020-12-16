import React from 'react';
import { CarouselContainer } from './styles';
import CardFeature from '../molecules/card/card';
import { Link } from 'react-router-dom';

export const Carousel = () => {
  return (
    <>
      <h2>You can review:</h2>
      <CarouselContainer>
        <Link to='/tests'>
          <CardFeature feature='Alternativa en etiquetas img' />
        </Link>
        <Link to='/tests'>
          <CardFeature feature='Jeraquia textual' />
        </Link>
        <Link to='/tests'>
          <CardFeature feature='Uso semántico de HTML' />
        </Link>
        <Link to='/tests'>
          <CardFeature feature='Utilizacion de etiquetas deprecadas' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
        <Link to='/tests'>
          <CardFeature soon feature='Snapshot para analisis de mediaqueries' />
        </Link>
      </CarouselContainer>
    </>
  );
};

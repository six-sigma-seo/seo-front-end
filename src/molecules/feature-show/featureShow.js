import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export const FeatureShow = ({ feature }) => {
  console.log('AQUI', feature);
  return (
    <Container>
      <figure className='graph'>
        <img
          alt='Se cumple o no el test'
          src={
            feature.boolean
              ? 'https://img.icons8.com/emoji/48/000000/check-mark-emoji.png'
              : 'https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png'
          }
        />
      </figure>
      <div className='content'>
        <h2 className='title'>{feature.title}</h2>
        <p className='description'>{feature.description}</p>
      </div>

      <Link to='/recomendations' className='link'>
        see more{'>>'}
      </Link>
    </Container>
  );
};

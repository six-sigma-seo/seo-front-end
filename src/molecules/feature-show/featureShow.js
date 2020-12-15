import React from 'react';
import { Container } from './styles';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export const FeatureShow = ({ ...feature }) => {
  return (
    <Container>
      <figure className='graph'>
        <img
          alt='Se cumple o no el test'
          src={feature.boolean ? 'thick.png' : 'cross.png'}
        />
      </figure>
      <div className='content'>
        <h2 className='title'>{feature.title}</h2>
        <p className='description'>{feature.description}</p>
      </div>
      <Router>
        <Link
          to=''
          // {feature.url}
          className='link'
        >
          see more{'>>'}
        </Link>
      </Router>
    </Container>
  );
};

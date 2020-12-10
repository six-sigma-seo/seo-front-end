import React from 'react';
import { Container } from './styles';

function featureShow ({feature}) {
  return (
      <Container>
        <figure className="graph">
          <img alt="Se cumple o no el test" src={feature.boolean ? 'thick.png' : 'cross.png'} />
        </figure>
        <div className="content">
          <h2 className="title">{feature.title}</h2>
          <p className="description">{feature.description}</p>
        </div>
        <a className="link" href={feature.url}>see more{'>>'}</a>
      </Container>
  );
}

export default featureShow;
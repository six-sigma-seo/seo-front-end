import React, { useEffect, useState } from 'react';
import { StyledLayout, StyledTitle, StyledTestSection } from './styles';
import '@babel/polyfill';

import { Menu } from '../../molecules/menu/menu';
import { GlobalStyle } from '../../App';

import { CardDown } from '../../molecules/card-down/cardDown';
import { FeatureShow } from '../../molecules/feature-show/featureShow';

export const Test = (props) => {
  const [state, setState] = useState(null);

  async function fetchData() {
    // setState({loading: true})
    const conf = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ web: 'http://www.javeriana.edu.co/' }),
    };
    const res = await fetch('https://six-sigma-seo.herokuapp.com/web', conf);
    res
      .json()
      .then((res) => setState(res))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle primary />
      <StyledLayout>
        <div></div>
        <Menu />
        <StyledTitle>Test</StyledTitle>
        <CardDown />
        <StyledTestSection>
          {state
            ? state.features.map((feature) => <FeatureShow feature={feature} />)
            : 'Cargando...'}
        </StyledTestSection>
      </StyledLayout>
    </>
  );
};

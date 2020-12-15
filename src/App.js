import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Layout-Home/Home';

import Rectangle from './assets/SVG/rectangle.svg';
import Stains from './assets/SVG/stains.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height:100vh;
    min-width:100vw;

    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;


    box-sizing: border-box;
    background: no-repeat center center;
    background: url(${(props) =>
      props.primary ? `${Stains}` : `${Rectangle}`});
    background-size: cover;
  }
`;

export const App = (props) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Layout>
        <div>{props.children}</div>
      </Layout>
    </>
  );
};

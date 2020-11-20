import React from 'react';
import { Normalize } from 'styled-normalize';
import { Home } from './pages/home/home';

export const App = (props) => {
  return (
    <>
      <Normalize />
      <Home>
        <div>{props.children}</div>
      </Home>
    </>
  );
};

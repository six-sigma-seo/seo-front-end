import React from 'react';
import { Nav, Wrapper } from './styles';

export const Menu = (props) => {
  return (
    <>
      <Nav>
        <Wrapper>
          <li>
            <a href='/'>Scrappy</a>
          </li>
          <li>
            <a href='/'>General Tips</a>
          </li>
          <li>
            <a href='/'>About us</a>
          </li>
        </Wrapper>
      </Nav>
    </>
  );
};

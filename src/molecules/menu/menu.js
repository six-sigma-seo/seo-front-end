import React from 'react';
import { Nav, Wrapper } from './styles';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export const Menu = (props) => {
  return (
    <Router>
      <Nav>
        <Wrapper>
          <li>
            <Link to='/'>Scrappy</Link>
          </li>
          <li>
            <Link to='/'>General Tips</Link>
          </li>
          <li>
            <Link to='/'>About us</Link>
          </li>
        </Wrapper>
      </Nav>
    </Router>
  );
};

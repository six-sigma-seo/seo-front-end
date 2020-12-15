import styled from 'styled-components';

export const Nav = styled.nav`
  /* grid-area: menu; */

  display: grid;
  grid-template: minmax(100px, auto) / 50% 50%;
  grid-template-areas: '. nav-menu';

  height: inherit;
`;
export const Wrapper = styled.ul`
  grid-area: nav-menu;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 0;

  li {
    list-style: none;
  }

  a {
    padding: 0;
    margin: 0;

    font-size: 1.2em;
    font-weight: 500;

    text-decoration: none;

    color: white;
  }
`;

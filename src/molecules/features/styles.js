import styled from 'styled-components';

export const Features = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding: 15px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1em 3em;
  }

  p {
    margin: 1em;
    justify-self: flex-end;
    text-align: right;
  }
`;

export const Graficas = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  canvas {
    padding: 1em;
  }
`;

export const Text = styled.div``;

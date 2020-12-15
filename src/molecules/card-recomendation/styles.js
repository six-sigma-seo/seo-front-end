import styled from 'styled-components';

export const CardContainer = styled.div`
  font-family: inherit;

  max-width: inherit;
  height: 100%;
  max-height: inherit;

  /* margin: 15px; */
  padding: 15px;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 30px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

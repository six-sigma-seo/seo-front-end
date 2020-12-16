import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: inherit;
  max-height: inherit;

  font-family: inherit;
  margin-right: 15px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 7.5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5943be;
    border-radius: 5px;
  }
`;

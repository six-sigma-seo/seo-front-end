import styled from 'styled-components';

export const CarouselContainer = styled.section`
  display: flex;
  max-width: inherit;
  padding: 5px;
  overflow-x: scroll;
  /* overflow-y: hidden; */

  margin: 0 auto;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5943be;
  }
`;

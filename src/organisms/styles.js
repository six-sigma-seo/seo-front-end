import styled from 'styled-components';

const CarouselContainer = styled.section`
  display: flex;
  width: 50vw;
  padding: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 auto;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5943be;
  }
`;

export { CarouselContainer };

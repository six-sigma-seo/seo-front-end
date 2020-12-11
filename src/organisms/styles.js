import styled from "styled-components";

const CarouselContainer = styled.section`
    display: flex;
    width: 50vw;
    padding: 5px;
    background: ##f8f8f8;
    overflow-x: auto;
    margin: 0 auto;
    &::-webkit-scrollbar {
    height: 5px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: #5943be;
    }
`;


export { CarouselContainer };
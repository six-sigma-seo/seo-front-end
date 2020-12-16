import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  background: rgba(255, 255, 255, 0.8);
  margin: 5px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  max-width: 640px;
  min-height: 200px;

  .content {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .link {
    align-self: flex-end;
    cursor:pointer;
    text-decoration: none;
    color: inherit;
  }
`;

export { Container };
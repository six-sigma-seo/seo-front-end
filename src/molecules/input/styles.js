import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  display: grid;
  grid-template: 1fr/75px 1fr;
  width: 100%;
  height: 62px;
  margin: 2.5% auto 0;
  padding: 0 15px 0 75px;
  place-self: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;

  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #a255ff;

  :focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    padding-left: 5%;
    transition: font-size 0.5s;
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: rgba(26, 49, 102, 0.5);
      color: #999;
      border: none;
      ::placeholder {
        color: #1a2151;
      }
    `}
`;

export { StyledInput };

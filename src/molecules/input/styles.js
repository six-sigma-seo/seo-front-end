import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  display: grid;
  grid-template: 1fr/75px 1fr;
  width: 518px;
  height: 62px;
  margin: 2.5% auto;
  padding: 0 15px 0 75px;

  font-family: 'Roboto', sans-serif;
  font-size: 2em;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 25px;

  background: -webkit-linear-gradient(#8352fd, #bba0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :focus {
    border: none;
    ${'' /* color: red; */}
    outline: none;
  }
  ::placeholder {
    padding-left: 5%;
    font-size: 0.5em;
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

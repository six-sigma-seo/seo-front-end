import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 518px;
  height: 62px;
  padding: 0 15px 0 75px;

  font-family: 'Roboto', 'sans-serif';
  ${'' /* font-size: 1.25em; */}
  font-size: 2em;

  ${'' /* background: #ffffff; */}
  ${'' /* background: #000; */}
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 25px;

  background: -webkit-linear-gradient(#8352fd, #bba0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :focus {
    border: none;
    color: red;
    outline: none;
  }
  ::placeholder {
    font-size: 1em;
    transition: font-size 0.5s;
    color: green;
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: rgba(26, 49, 102, 0.5);
      ${'' /* border-radius: 25px; */}
      color: #999;

      border: none;
      ::placeholder {
        color: #1a2151;
      }
    `}
`;

export { StyledInput };

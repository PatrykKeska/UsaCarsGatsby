import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: calc(1em + 1vw); 
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0; 
    font-family: 'Ubuntu';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Ubuntu';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
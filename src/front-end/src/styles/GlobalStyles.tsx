import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    max-width: 100vw; 
    overflow-x: hidden; 
  }

  h1 {
    color: #1C1B1F;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    text-align: center;
    color: #333;
  }

  p {
    text-align: center;
    color: #777;
  }

  
`;

export default GlobalStyles;

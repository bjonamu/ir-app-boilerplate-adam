import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /** 1rem = 10px; 10px/16px = 62.5% **/
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;

    /** Typography **/
    font-family: 'Exo', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.snow};
  }
`

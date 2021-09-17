import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1 1 auto;
  }
`
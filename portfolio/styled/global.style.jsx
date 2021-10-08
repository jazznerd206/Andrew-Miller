import { createGlobalStyle } from 'styled-components';
import Oxy_WOFF from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff'
import Oxy_WOFF2 from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Oxygen Mono';
    src:    url(${Oxy_WOFF2}) format('woff2'),
            url(${Oxy_WOFF}) format('woff');
    }
  * {
    font-family: 'Oxygen Mono';
    ::-webkit-scrollbar {
      display: none;
    }
  }
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: visible;
    --color-background: rgb(51, 51, 51);
    --color-on-background:#fff;

    --color-tooltip: rgba(0,5,11,0.9);
    --color-on-tooltip: #fff;

    --color-handle: #67c2e4;
    --color-handle-drag: #2c343a;
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


import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
  }
`;

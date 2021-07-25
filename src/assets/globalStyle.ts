import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border: none;
  background-color: transparent;
}
`;

export default GlobalStyle;

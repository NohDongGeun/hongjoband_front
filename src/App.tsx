import React from "react";
import Home from "../src/pages/Home";
import GlobalStyle from "./assets/globalStyle";
import Music from "./pages/Music";
import { Reset } from "styled-reset";
import NewMusic from "./pages/NewMusic";

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <NewMusic />
    </>
  );
};

export default App;

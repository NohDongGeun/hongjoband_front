import React from "react";
import Home from "../src/pages/Home";
import GlobalStyle from "./assets/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;

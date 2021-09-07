import React from "react";
import Home from "../src/pages/Home";
import GlobalStyle from "./assets/globalStyle";
import Music from "./pages/Music";
import { Reset } from "styled-reset";
import NewMusic from "./pages/NewMusic";
import Test from "./components/Test";
import Video from "./components/organisms/Home/Video";
import Text from "./components/organisms/Home/Text";

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Home />
      {/* <Text /> */}
    </>
  );
};

export default App;

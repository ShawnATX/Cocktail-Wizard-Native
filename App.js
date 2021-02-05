import React from "react";
import { Provider as PaperProvider, DarkTheme } from "react-native-paper";
import Main from "./src/Main";

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <Main />
    </PaperProvider>
  );
};

export default App;

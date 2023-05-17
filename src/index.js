import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import LogoBar from "./components/LogoBar";
import BottomAd from "./components/BottomAd";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Trebuchet MS, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LogoBar />
      <SearchForm />
      <BottomAd imageUrl="https://example.com/ad-image.png" />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Styles/Components/public.scss";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  colors: { grayBg: "#f5fbff" },
  breakpoints: {
    sm: "576px",
    md: "768px",
    semiLg: "992px",
    nesthubLg: "1020px",
    lg: "1200px",
    semiXl: "1400px",
    xl: "1750px",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

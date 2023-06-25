import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

export default App;

reportWebVitals();

import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);

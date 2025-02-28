import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </ChakraProvider>
)

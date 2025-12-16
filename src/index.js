import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/font.css";
import App from "./App";


import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';  // <-- تغییر اصلی اینجا
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://us-west-2.cdn.hygraph.com/content/cmie4l00505iz07ur2be8pdte/master' }),  // مثلاً '/graphql'
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Web3Provider } from "./components/Web3Provider.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./theme/theme-provider.tsx";

const client = new ApolloClient({
  uri: "https://sepolia.easscan.org/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Web3Provider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Web3Provider>
    </ThemeProvider>
  </React.StrictMode>
);

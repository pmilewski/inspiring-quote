import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import App from "./components/App";

const URL = "https://x5sfpd-4000.csb.app/";

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
  queryDeduplication: false
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </StrictMode>,
);

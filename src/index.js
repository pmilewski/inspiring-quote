import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import App from "./App";

// const URL = "https://x5sfpd-4000.csb.app/";
// const URL = "http://localhost:4000"
const URL = "https://zgcrm.sse.codesandbox.io/"

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

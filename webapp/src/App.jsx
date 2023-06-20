import React, { createRef } from "react";
import DegreeBuilderView from "./views/DegreeBuilder/DegreeBuilderView";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../css/App.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        course: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        department: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        program: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        programType: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        schedule: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

export default function App() {
  const degreeBuilderRef = createRef();

  return (
    <>
      <ApolloProvider client={client}></ApolloProvider>
      <div id="appWindow" className="app-window">
        <DegreeBuilderView forwardRef={degreeBuilderRef} />
      </div>
    </>
  );
}

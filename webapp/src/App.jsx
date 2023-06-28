import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DegreeBuilderView from "./views/DegreeBuilder/DegreeBuilderView";
import DbHomeView from "./views/DbAccess/DbHomeView";
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
    uri: "http://localhost:8000/graphql",
    cache,
});

function App() {
  const degreeBuilderRef = React.useRef();
  const DbHomeRef = React.useRef();

  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="appWindow" className="app-window">
          <Routes>
            <Route path="/app" element={<DegreeBuilderView forwardRef={degreeBuilderRef} />} />
            <Route path="/api" element={<DbHomeView forwardRef={DbHomeRef} />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

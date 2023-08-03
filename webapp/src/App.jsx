import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DegreeBuilderView from "./views/DegreeBuilder/DegreeBuilderView";
import DbHomeView from "./views/DbAccess/DbHomeView";
import ScheduleView from "./views/MySchedules/ScheduleView";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../css/App.css";

const dbPort = 8000;
const isProduction = import.meta.env.PROD; //env inherited from VITE meaning: if we're running vite build, it's prod and vite serve, it's dev

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
  uri: isProduction
    ? "https://visualdegree.com:" + dbPort + "/graphql" // Production URL
    : "http://localhost:" + dbPort + "graphql", // Development URL
  cache,
});

function App() {
  const degreeBuilderRef = React.useRef();
  const DbHomeRef = React.useRef();
  const ScheduleRef = React.useRef();

  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="appWindow" className="app-window">
          <Routes>
            <Route
              path="/app"
              element={<DegreeBuilderView forwardRef={degreeBuilderRef} />}
            />
            <Route
              path="/api"
              element={<DbHomeView forwardRef={DbHomeRef} />}
            />
            <Route
              path="/schedules"
              element={<ScheduleView forwardRef={ScheduleRef} />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

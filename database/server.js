require("dotenv").config({ path: "../server/config/.env" });
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/connection");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const responseCachePlugin = require("apollo-server-plugin-response-cache");
const fs = require("fs");
const path = require("path");
const port = process.env.DB_PORT;
const resolvers = require("./scripts/compileresolvers");

const startServer = async () => {
  // Connect to the database
  connectDB();

  app.use(cors());

  app.use("/views", express.static(path.join(__dirname, "views")));
  app.get("/voyager", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "voyager.html"));
  });

  // Load typeDefs from schema.graphql

  // TODO some validation check that modules are in sync
  const typeDefs = fs.readFileSync(
    path.join(__dirname, "schema.graphql"),
    "utf8"
  );

  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [responseCachePlugin.default()],
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(port, console.log(`Server running on port ${port}`.cyan));
};

startServer();

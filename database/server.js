require("dotenv").config({ path: "../config/.env" });
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/connection");
const app = express();

const port = process.env.DB_PORT;

// Connect to the database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    //GraphiQL graphical interface accessible at the /graphql endpoint only in dev.
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`.cyan));

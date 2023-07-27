const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./server/schema/schema");
const connectDB = require("./server/config/db");
<<<<<<< HEAD
const port = process.env.PORT || 8000;
=======
const port = 8000;
>>>>>>> e344b9e (firebase auth)
const app = express();

// Connect to the database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`.cyan));

const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema');
const connectDB = require('./server/config/db');
const port = process.env.PORT || 5000;
const app = express();

// Connect to the database
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema
  })
);

app.listen(port, console.log(`Server running on port ${port}`.cyan));

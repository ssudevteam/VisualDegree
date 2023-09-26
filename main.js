require("dotenv").config({ path: "config/.env" });
const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./server/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./server/config/corsOptions");
const PORT = process.env.APP_PORT || 3000;
const firebase_server = require("./users/init"); // I'm not sure if this needs to be here

const headers1 = "Origin, X-Requested-With, Content-Type, Accept";
const headers2 =
  "Authorization, Access-Control-Allow-Credentials, x-access-token";

/* Cross Origin Requests*/
app.use(cors(corsOptions));

/* Header Fields */
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS, PUT"
  );
  res.header("Access-Control-Allow-Headers", `${headers1},${headers2}`);
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// process json
app.use(express.json());
app.use(cookieParser());

// route public folder structures for style.css and images etc.
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./server/routes/mainrouter"));
app.use("/api", require("./server/routes/api"));
app.use("/api", require("./server/routes/users"));
app.use("/blog", require("./blog/server")); // Replace this with the actual path to your blog server

// send to 404 to front end on res.status
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({
      message: "404 Not Found",
    });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/* ... [Unused] */
// Logger
// const { logger } = require("./server/middleware/logger");
// app.use(logger); logger disabled until we figure out how to implement a real logging system

require("dotenv").config({ path: ".env" });

/* 1. Express Server */
const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./server/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const PORT = process.env.APP_PORT || 3000;

/* 2. CORS and headers */
const cors = require("cors");
const corsOptions = require("./server/config/corsOptions");
const headers1 = "Origin, X-Requested-With, Content-Type, Accept";
const headers2 =
  "Authorization, Access-Control-Allow-Credentials, x-access-token";
/*               */


/* 2a. Header Fields */
app.use(cors(corsOptions));
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

/* 1a. Express Server */
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

// Top Level Routing
app.use("/", express.static(path.join(__dirname, "public"))); // public static html site routing
app.use("/", require("./routes/mainrouter")); // main navigation routing
app.use("/api", require("./routes/api"));     // Api level routing
app.use("/blog", require("./blog/server"));   // Blog level routing

/* HTML Messages   */
// 404
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
/*               */


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
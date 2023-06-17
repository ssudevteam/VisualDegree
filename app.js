const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./server/middleware/logger");
const errorHandler = require("./server/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.use(logger);

// process json
app.use(express.json());

app.use(cookieParser());

// route public folder structures for style.css and images etc.
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/mainrouter"));
app.use("/api", require("./routes/api"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
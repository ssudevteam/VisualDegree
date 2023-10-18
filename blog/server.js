const env = require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const path = require("path"); // Import the 'path' module
const Article = require("./models/article");
const methodOverride = require("method-override");

mongoose.connect(process.env.MONGO_URI + "blog_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method")); // when we pass this, we can send delete HTML messages instead of GET/POST

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "publicfiles")));

app.use(async (req, res, next) => {
  try {
    const allTags = await Article.distinct("tags"); // Fetch all unique tags from the database
    res.locals.selectedTag = req.query.tag || "";
    res.locals.allTags = allTags; // Add 'allTags' to 'locals' to make it available in templates
    next();
    // these arent working

    res.locals.getTagColor = function (index) {
      const colors = ["gradient-0", "gradient-1", "gradient-2", "gradient-3"];
      return colors[index % colors.length];
    };
    res.locals.formatDate = function (dateString) {
      const today = new Date();
      const articleDate = new Date(dateString);
      const timeDifference = today.getTime() - articleDate.getTime();
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (daysAgo === 1) {
        return "1 DAYS AGO";
      } else if (daysAgo === 0) {
        return "TODAY";
      } else {
        return daysAgo + " DAYS AGO";
      }
    };
  } catch (error) {
    next(error);
  }
});

app.use("/articles", articleRouter);

app.get("/", async (req, res) => {
  // Tag Filtering
  const selectedTag = req.query.tag; // Get the selected tag from the query string
  let filter = {}; // Initialize an empty filter object
  if (selectedTag) {
    filter.tags = selectedTag; // If a tag is selected, filter by that tag
  }

  const articles = await Article.find(filter).sort({
    createdAt: "desc",
  }); // sorted by descending order

  res.render("articles/index", { articles: articles });
});

module.exports = app;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");

mongoose.connect(
  "mongodb+srv://ssudevteam:orange^45@cluster0.bpjjkak.mongodb.net/blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test",
      createdAt: new Date(),
      description: "Test description",
    },
  ];

  res.render("articles/index", { articles: articles });
});

app.listen(8105);

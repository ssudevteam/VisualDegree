const express = require("express");
const Article = require("./../models/article");
const { listenerCount } = require("../../database/server/models/Program");
const router = express.Router();

router.get("/new", function (req, res) {
  res.render("articles/new", { article: new Article() });
});

router.get("/:id", async function (req, res) {
  const article = await Article.findById(req.params.id);
  if (article == null) {
    res.redirect("/");
  }
  res.render("articles/show", { article: article });
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (error) {
    res.render("articles/new", { article: article });
    console.log(error);
  }
});

module.exports = router;

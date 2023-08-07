const express = require("express");
const Article = require("./../models/article");
const { listenerCount } = require("../../database/server/models/Program");
const router = express.Router();

router.get("/new", function (req, res) {
  res.render("articles/new", { article: new Article(), content: null });
});

router.get("/edit/:id", async function (req, res) {
  const article = await Article.findById(req.params.id);
  const content =
    article && article.markdown ? JSON.stringify(article.markdown) : null;
  res.render("articles/edit", { article: article, content: content });
});

router.get("/:slug", async function (req, res) {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) {
    res.redirect("/");
  }
  res.render("articles/show", { article: article });
});

router.post(
  "/",
  async (req, res, next) => {
    req.article = new Article();
    next();
  },
  saveArticleAndRedirect("new")
);

router.put(
  "/:id",
  async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
  },
  saveArticleAndRedirect("edit")
);

router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/blog");
});

// For new and edit routes
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;
    article.tags = req.body.tags;
    try {
      article = await article.save();
      res.redirect(`/blog/articles/${article.slug}`);
    } catch (error) {
      res.render(`/blog/articles/${path}`, { article: article });
      console.log(error);
    }
  };
}

module.exports = router;

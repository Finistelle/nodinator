const express = require('express');
const router = express.Router();
const Article = require("./../model/article/ArticleSchema");

/* GET all articles. */
router.get('/articles',(req, res) => {
  Article.find((err, articles) => {
    if (err) res.json({"error": err.message});
    res.json(articles);
  });
});

/* GET article by ID */
router.get('/article/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "article": article
    });
  });
});

module.exports = router;

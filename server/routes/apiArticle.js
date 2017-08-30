const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const Article = require("./../model/article/ArticleSchema");

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

//############################
//######### Article
//############################

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

/* POST add new article */
router.post('/article', (req, res) => {
  let article = new Article(req.body);
  article.save((err, createdArticle) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "article": createdArticle
    })
  });
});

/* PUT update article information */
router.put('/article/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) return res.json({
      "success": false,
      "error": err.message
    });
    article.title = req.body.title || article.title;
    article.content = req.body.content || article.content;
    article.slug = req.body.slug || article.slug;
    article.status = req.body.status || article.status;

    article.save((err, articleUpdated) => {
      if (err) return res.json({
        "success": false,
        "error": err.message
      });
      res.json({
        "success": true,
        "article": articleUpdated
      })
    });
  });
});

/* DELETE article by ID */
router.delete('/article/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true
    });
  });
});
module.exports = router;

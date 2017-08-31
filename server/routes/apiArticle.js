const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const Checker = require('./../domain/acl/Checker');
const Article = require("./../model/article/ArticleSchema");

let authenticator = new Authentitcator();
let checker = new Checker();

router.use((req, res, next) => {
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
router.post('/article', (req, res, next) => {
  let permission = ['ROLE_ADMIN'];
  checker.authorize(req, res, next, permission);
}, (req, res) => {
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
router.put('/article/:id', (req, res, next) => {
  let permission = ['ROLE_ADMIN'];
  checker.authorize(req, res, next, permission);
}, (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) return res.json({
      "success": false,
      "error": err.message
    });
    article.title = req.body.title || req.headers['title'] || article.title;
    article.content = req.body.content || req.headers['content'] || article.content;
    article.slug = req.body.slug || req.headers['slug'] ||article.slug;
    article.status = req.body.status || req.headers['status'] || article.status;

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
  let permission = ['ROLE_ADMIN'];
  checker.authorize(req, res, next, permission);
}, (req, res) => {
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

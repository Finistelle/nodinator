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
    if (err) res.json({"error": err.message});
    res.json(article);
  });
});

module.exports = router;

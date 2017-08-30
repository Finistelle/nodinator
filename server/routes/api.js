const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//############################
//######### User
//############################

/* GET all users. */
router.get('/users', (req, res) => {

  let errs = [];
  let User = require("./../model/user/UserSchema");

  User.find((err, users) => {
    if (err) errs.push(err.message);
    if (errs.length != 0) res.json({"errors": errs});
    res.json({"users": users});
  })
});

/* GET user by id */
router.get('/user/:id', (req, res) => {
  //TODO implements this route
});

/* PUT update user information */
router.put('/user/:id', (req, res) => {
  //TODO implements this route
});

/* DELETE delete user by id */
router.delete('/user/:id', (req, res) => {
  //TODO implements this route
});

//############################
//######### Article
//############################

/* GET all articles. */
router.get('/articles',(req, res) => {
  let Article = require('./../model/article/ArticleSchema');
  Article.find((err, articles) => {
    if (err) res.json({"error": err.message});
    res.json(articles);
  });
});

/* GET article by ID */
router.get('/article/:id', (req, res) => {
  let Article = require('./../model/article/ArticleSchema');
  Article.findById(req.params.id, (err, article) => {
    if (err) res.json({"error": err.message});
    res.json(article);
  });
});

module.exports = router;

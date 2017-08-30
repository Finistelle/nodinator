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

module.exports = router;

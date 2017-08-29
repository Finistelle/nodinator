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

router.get('/user/create', (req, res) => {
  let User = require("./../model/user/UserSchema");
  var nick = new User({
    firstName: 'Nick',
    lastName: 'pouet',
    email: 'test@test.com',
    password: 'password'
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

module.exports = router;

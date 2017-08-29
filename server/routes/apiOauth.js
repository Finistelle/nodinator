const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./../../config');

router.post('/authenticate', (req, res) => {
  let User = require("./../model/user/UserSchema");
  User.findOne({
    email: req.body.email
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        let token = jwt.sign(user, config.secret, {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          token: token
        });
      }
    }
  });
});

module.exports = router;

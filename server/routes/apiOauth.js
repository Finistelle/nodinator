const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const server = require('./../../server');

// ##########################
// ########## All the following routes are open and do not require an JWT
// ##########################

/* POST sign in user */
router.post('/sign-in', (req, res) => {
  let User = require("./../model/user/UserSchema");
  user = new User();
  if (null == req.body.firstName) {
    return res.json({
      "success": false,
      "error": "malformed request missing argument firstName"
    });
  } else {
    user.firstName = req.body.firstName;
  }
  if (null == req.body.lastName) {
    return res.json({
      "success": false,
      "error": "malformed request missing argument lastName"
    });
  } else {
    user.lastName = req.body.lastName;
  }
  if (null == req.body.password) {
    return res.json({
      "success": false,
      "error": "malformed request missing argument password"
    });
  } else {
    user.password = req.body.password;
  }
  if (null == req.body.email) {
    return res.json({
      "success": false,
      "error": "malformed request missing argument email"
    });
  } else {
    user.email = req.body.email;
  }
  user.roles.push('ROLE_USER');
  try {
    User.create(user);
    res.json({
      "success":true,
      "user": user
    });
  } catch (e) {
    res.json({
      "success": false,
      "error": e.message
    })
  }
});

/* POST authenticate user */
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
        let token = jwt.sign(user, server.config.secret, {
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

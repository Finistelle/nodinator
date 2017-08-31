const express = require('express');
const router = express.Router();
const User = require("./../model/user/UserSchema");

/* GET user by id */
router.get('/user/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "user": user
    });
  });
});

module.exports = router;

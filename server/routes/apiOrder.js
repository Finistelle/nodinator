const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const User = require("./../model/user/UserSchema");
const Order = require("./../model/product/OrderSchema");

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

//############################
//######### Order
//############################

/* GET all products. */
router.get('/orders', (req, res) => {
  Order.find((err, orders) => {
    if (err) return res.json({
      "success": false,
      "error": err.message
    });
    res.json({
      "success": true,
      "orders": orders
    });
  });
});

/* GET product by id. */
router.get('/order/:id', (req, res) => {
  let id = req.params.id;
  Order.findById(id, (err, order) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "order": order
    });
  });
});

/* POST create a product */
router.post('/order/:userId', (req, res) => {
  let id = req.params.userId;
  User.findById(id, (err, user) => {
    if (err) return res.json({"success": false, "error": err.message});
    let order = new Order();
    if (null != req.body.products) order.products = req.body.products;
    if (null != user) order.customer = user;
    Order.save(order, (err) => {
      if (err) return res.json({
        "success": false,
        "error": err.message
      });
      res.json({
        "success": true,
        "order": order
      });
    });
  })
});

/* PUT update a product */
router.put('/order/:id', (req, res) => {
  // TODO implements this route
});

/* DELETE update a product */
router.delete('/order/:id', (req, res) => {
  // TODO implements this route
});

module.exports = router;

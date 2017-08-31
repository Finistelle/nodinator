const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const User = require("./../model/user/UserSchema");
const Product = require("./../model/product/ProductSchema");

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

//############################
//######### Product
//############################

/* GET all products. */
router.get('/products', (req, res) => {
  Product.find((err, products) => {
    if (err) return res.json({
      "success": false,
      "error": err.message
    });
    res.json({
      "success": true,
      "products": products
    });
  });
});

/* GET product by id. */
router.get('/product/:id', (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "product": product
    });
  });
});

/* POST create a product */
router.post('/product', (req, res) => {
  let product = new Product();
  if (null != req.body.title) product.title = req.body.title;
  if (null != req.body.type) product.type = req.body.type;
  if (null != req.body.price) product.price = req.body.price;
  // TODO manage media
  Product.save(product, (err) => {
    if (err) return res.json({
      "success": false,
      "error": err.message
    });
    res.json({
      "success": true,
      "product": product
    });
  });
});

/* PUT update a product */
router.put('/product/:id', (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    if (null != req.body.title) product.title = req.body.title;
    if (null != req.body.type) product.type = req.body.type;
    if (null != req.body.price) product.price = req.body.price;
    // TODO manage media
    Product.save(product, (err) => {
      if (err) return res.json({
        "success": false,
        "error": err.message
      });
      res.json({
        "success": true,
        "product": product
      });
    });
  });
});

/* DELETE delete a product */
router.delete('/product/:id', (req, res) => {
  let id = req.params.id;
  Product.remove({"_id":id}, (err) => {
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

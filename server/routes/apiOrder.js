const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const User = require("./../model/user/UserSchema");
const Order = require("./../model/user/OrderSchema");

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

//############################
//######### Order
//############################

/* GET all products. */
router.get('/orders', (req, res) => {
  // TODO implements this route
});

/* GET product by id. */
router.get('/order/:id', (req, res) => {
  // TODO implements this route
});

/* POST create a product */
router.post('/order', (req, res) => {
  // TODO implements this route
});

/* PUT update a product */
router.put('/order/:id', (req, res) => {
  // TODO implements this route
});

/* DELETE update a product */
router.delete('/order/:id', (req, res) => {
  // TODO implements this route
});

const express = require('express');

const Commodity = require('../models/commodity');
const Cart = require('../models/cart');

const router = express.Router();

router.get('/goods', function (req, res, next) {
  Commodity.find(function (err, commodities) {
    if (err) {
      res.send('error');
    }
    res.json(commodities);
  });
});


// 获取某个用户的购物车内容
router.get('/cart', function (req, res, next) {
  const userId = req.userId;
  Cart.find({user_id: userId}, function(err, carts) {
    res.json(carts);
  })
});

// 用户向购物车添加商品，或修改购物车内容
router.post('/cart', function(req, res, next) {
  const userId = req.userId;
  Cart.find()

});

module.exports = router;
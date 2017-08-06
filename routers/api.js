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
  const userId = parseInt(req.query.userId, 10);
  if (userId) {
    let commodities = [];
    Cart.findOne({
      user_id: userId
    }, function (err, cart) {
      if (err) {
        console.log(err);
      }
      // console.log(cart.goods);
      if (cart && cart.goods) {
        async function loopArray() {
          for (commodity of cart.goods) {
            const quantity = commodity.quantity;
            await Commodity.findOne({
              commodity_id: commodity.commodity_id
            }, function (err, commodity) {
              if (err) {
                console.log(err);
              }
              // console.log(`commodity: ${commodity}`);
              commodity = JSON.parse(JSON.stringify(commodity)); // 貌似查询返回的对象没有 setter，所以浅复制一下。
              const cartCommodity = Object.assign(commodity, {
                quantity: quantity
              });
              // console.log(`cartCommodity: ${cartCommodity}`);
              // console.log(`cartCommodity.quantity: ${cartCommodity.quantity}`);
              commodities.push(cartCommodity);
              // console.log(commodities.length);
            });
          }
          res.json(commodities);
        }
        loopArray();
      }
    })
  } else {
    next();
  }
});

// 用户向购物车添加商品，或修改购物车内容
router.post('/cart', function (req, res, next) {
  const user_id = parseInt(req.body.userId, 10);
  const commodity_id = parseInt(req.body.commodityId, 10);
  const quantity = parseInt(req.body.quantity, 10);
  // console.log(`user_id: ${user_id}  commodity_id: ${commodity_id} quantity: ${quantity}`);
  if (user_id && commodity_id && quantity) {
    Cart.findOne({
      user_id: user_id
    }, function (err, cart) {
      if (err) {
        console.log(err);
      }
      if (cart && cart.goods) {
        // 如果 commodity_id 的商品已经存在， 更新 该商品数量
        function shouldAddNewCommodity() {
          const goods = JSON.parse(JSON.stringify(cart.goods));
          for (let i = 0; i < goods.length; i = i + 1) {
            if (commodity_id === goods[i].commodity_id) {
              goods[i].quantity = quantity;
              // console.log(goods[i].quantity);
              cart.goods = goods;
              cart.save(function (err, tmp) {
                if (err) {
                  console.log(err);
                }
                // console.log(`tmp: ${tmp}`);
                res.json({
                  success: 2,
                  type: 'update commodity quantity.'
                });
              });
              return false;
            }
          }
          return true;
        }

        const shouldAdd = shouldAddNewCommodity();
        // 如果该商品不存在，创建该商品
        if (shouldAdd) {
          cart.goods.push({
            commodity_id: commodity_id,
            quantity: quantity,
          });
          cart.save(function (err) {
            if (err) {
              console.log(err);
            }
            res.json({
              success: 1,
              type: 'add commodity to cart.'
            });
          });
        }
      } else {
        const adminCart = new Cart({
          user_id: 1,
          goods: [{
            commodity_id: commodity_id,
            quantity: quantity,
          }],
        });
        adminCart.save(function (err) {
          if (err) {
            console.log(err);
          }
          res.json({
            success: 1,
            type: 'create new cart',
          });
        });
      }
    });
    // Cart.update({ user_id: user_id },{
    //   "$addToSet":{"goods":{ "commodity_id": commodity_id, "quantity": quantity }}
    // }).exec(function(){
    //   res.json({ success: 1 });
    // });
  } else {
    res.json({
      success: 0,
      user_id: user_id,
      commodity_id: commodity_id,
      quantity: quantity,
    });
  }
});

router.delete('/cart', function (req, res, next) {
  const user_id = parseInt(req.body.userId, 10);
  const commodity_id = parseInt(req.body.commodityId, 10);
  if (user_id && commodity_id) {
    Cart.findOne({
      user_id: user_id
    }, function (err, cart) {
      if (err) {
        console.log(err);
      }

      if (cart && cart.goods) {
        function isCommodityInCart() {
          const goods = JSON.parse(JSON.stringify(cart.goods));
          // console.log(`goods: ${goods}`);
          for (let i = 0; i < goods.length; i = i + 1) {
            if (commodity_id === goods[i].commodity_id) {
              let newGoods = goods.slice(0, i).concat(goods.slice(i + 1));
              cart.goods = newGoods;
              cart.save(function (err, newCart) {
                if (err) {
                  console.log(err);
                }
                res.json({
                  success: 1,
                  type: 'delete a commodity from cart.',
                  // goods: newCart.goods,
                });
              });
              return true;
            }
          }
          return false;
        }

        const commodityInCart = isCommodityInCart();

        // console.log(`commodityInCart: ${commodityInCart}`);
        if (!commodityInCart) {
          res.json({
            success: 0,
            type: 'can not find the commodity in this user cart.'
          });
        }
      } else {
        res.json({
          success: 0,
          type: 'can not find car for this user.'
        });
      }
    })
  } else {
    res.json({
      success: 0,
      type: '缺少参数.'
    })
  }
})

module.exports = router;
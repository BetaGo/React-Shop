const Cart = require('../models/cart');

const adminCart = new Cart({
  user_id: 1,
  goods: [],
});

adminCart.save();
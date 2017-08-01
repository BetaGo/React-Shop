const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = Schema({
  user_id: Number,
  goods: Array,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commoditySchema = Schema({
  commodity_id: Number,
  name: String,
  desc: String,
  cover: { type: String, default: 'default_cover.jpg' },
  images: { type: Array, default: ['no_images.jpg'] },
  price: Number,
  remain: Number,
});

const Commodity = mongoose.model('Commodity', commoditySchema);

module.exports = Commodity;
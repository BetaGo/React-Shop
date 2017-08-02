const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commoditySchema = Schema({
  commodity_id: Number,
  name: String,
  desc: String,
  type: String,
  cover: { type: String, default: 'default_cover.jpg' },
  images: { type: Array, default: ['no_images.jpg'] },
  price: Number,
  remain: Number,
});

commoditySchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
}

commoditySchema.statics.findByCommodityId = function(id, cb) {
  return this.find({ commodity_id: id }, cb);
}

const Commodity = mongoose.model('Commodity', commoditySchema);

module.exports = Commodity;
const mongoose = require('mongoose');
// const addCommodity = require('../mock/addCommodity');
// const addCart = require('../mock/addCart');
// const addUser = require('../mock/addUser');


mongoose.connect('mongodb://localhost:27017/shop');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`连接出错: ${error}`);
});

db.once('open', () => {
  console.log('连接数据库成功～');

  // addCommodity(100); // 添加 mock商品信息到数据库
});

db.once('close', () => {
  console.log('断开与数据库的链接');
});

module.exports = db;

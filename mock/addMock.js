const mongoose = require('mongoose');
const mongodb = require('../config/default').mongodb;

mongoose.connect(mongodb);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

const addCommodity = require('./addCommodity');

Promise.all([
  require('./addCart'),
  require('./addUser'),
  addCommodity(100),
])
.then(db.close());

db.on('error', (error) => {
  console.error(`连接出错: ${error}`);
});

db.once('open', () => {
  console.log('连接数据库成功～');
});

db.once('close', () => {
  console.log('断开与数据库的链接');
});

db.close();



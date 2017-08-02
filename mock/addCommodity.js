const Commodity = require('../models/commodity');

function mockCommodity(num) {
  let i = 0;
  let arr = [];
  let types = ['吃','喝','玩','乐'];
  let typeIndex;
  while (i < num) {
    type = types[Math.floor(Math.random() * 4)];
    arr[i] = new Commodity({
      "commodity_id": i,
      "name":  `商品${i}`,
      "type": type,
      "desc": `商品${i}的简介，种类： ${type}`,
      "cover": "http://placeimg.com/640/480/any",
      "images": [
        "http://placeimg.com/640/480/any",
        "http://placeimg.com/640/480/animals",
        "http://placeimg.com/640/480/arch",
        "http://placeimg.com/640/480/people"
      ],
      "price": parseFloat((Math.random() * 1000).toFixed(2)),
      "remain": Math.round(Math.random() * 200),
    });
    arr[i].save(function(err, commodity) {
      if (err) {
        console.log(`错误： ${err}`);
      }
      console.log(`添加 ${commodity.name} 成功！`);
    });
    i++;
  }
}

module.exports = mockCommodity;

/*
let someGoods0 = new Commodity({
  "commodity_id": 1,
  "name": "Bird - Cloud",
  "desc": "The bird wishes it were a cloud. The cloud wishes it were a bird.",
  "cover": "http://placeimg.com/640/480/any",
  "images": [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/animals",
    "http://placeimg.com/640/480/arch",
    "http://placeimg.com/640/480/people"
  ],
  "price": 999,
  "remain": 9,
});
someGoods0.save();

let someGoods1 = new Commodity({
  "commodity_id": 2,
  "name": "飞鸟",
  "desc": "Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sign.",
  "cover": "http://placeimg.com/640/480/any",
  "images": [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/animals",
    "http://placeimg.com/640/480/arch",
    "http://placeimg.com/640/480/people"
  ],
  "price": 98,
  "remain": 1,
});
someGoods1.save();

let someGoods2 = new Commodity({
  "commodity_id": 3,
  "name": "北客有来初未识",
  "desc": "南金无价喜新尝。含滋嚼句齿牙香。",
  "cover": "http://placeimg.com/640/480/any",
  "images": [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/animals",
    "http://placeimg.com/640/480/arch",
    "http://placeimg.com/640/480/people"
  ],
  "price": 99,
  "remain": 2,
});
someGoods2.save();

let someGoods3 = new Commodity({
  "commodity_id": 4,
  "name": "江南好，风景旧曾谙。",
  "desc": " 日出江花红胜火， 春来江水绿如蓝， 能不忆江南？",
  "cover": "http://placeimg.com/640/480/any",
  "images": [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/animals",
    "http://placeimg.com/640/480/arch",
    "http://placeimg.com/640/480/people"
  ],
  "price": 998,
  "remain": 2,
});
someGoods3.save();

let someGoods4 = new Commodity({
  "commodity_id": 5,
  "name": "昨夜西风凋碧树",
  "desc": "独上高楼，望尽天涯路。",
  "cover": "http://placeimg.com/640/480/any",
  "images": [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/animals",
    "http://placeimg.com/640/480/arch",
    "http://placeimg.com/640/480/people"
  ],
  "price": 999,
  "remain": 1,
});
someGoods4.save();

*/


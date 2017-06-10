import React, { Component } from 'react';
import GoodsCard from './GoodsCard';


const goods = [{
    "_id": "5933977071be8a59a897d87d",
    "author": {
      "_id": "593375f3b88bce2a5645fac2",
      "name": "noone",
      "gender": "m",
      "bio": "平平凡凡的普通人，Valar Morghulis.",
      "avatar": "avatar-noone.jpg"
    },
    "name": "昨夜西风凋碧树",
    "desc": "银装素裹千万家",
    "cover": "cover.jpg",
    "price": 998,
    "remain": 3,
    "created_at": "2017-06-04 13:15"
  },
  {
    "_id": "593376e7b88bce2a5645fac4",
    "author": {
      "_id": "593375f3b88bce2a5645fac2",
      "name": "noone",
      "gender": "m",
      "bio": "平平凡凡的普通人，Valar Morghulis.",
      "avatar": "avatar-noone.jpg"
    },
    "name": "风景依旧，烟雨江南",
    "desc": "江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝，能不忆江南？",
    "cover": "cover.jpg",
    "price": 666,
    "remain": 5,
    "created_at": "2017-06-04 10:56"
  },
  {
    "_id": "5932f19d77aca11b50275c34",
    "author": {
      "_id": "5932ed239bdab312f90d27b6",
      "name": "admin",
      "gender": "m",
      "bio": "后台最牛逼的管理员",
      "avatar": "avatar-admin.jpg"
    },
    "name": "三杯两盏淡酒",
    "desc": "举杯相望，对影成双。",
    "cover": "cover.jpg",
    "price": 999,
    "remain": 1,
    "created_at": "2017-06-04 01:27"
  },
  {
    "_id": "5932ed629bdab312f90d27b7",
    "author": {
      "_id": "5932ed239bdab312f90d27b6",
      "name": "admin",
      "gender": "m",
      "bio": "后台最牛逼的管理员",
      "avatar": "avatar-admin.jpg"
    },
    "name": "昨夜西风凋碧树",
    "desc": "一场春风一场醉",
    "cover": "cover.jpg",
    "price": 999,
    "remain": 1,
    "created_at": "2017-06-04 01:09"
  }
];


class GoodsList extends Component {

  render() {
    return (
      <div>
        {goods.map((goods,index) => (
          <GoodsCard key={goods._id} goods={goods} />
        ))}
      </div>
    );
  }
}

export default GoodsList;
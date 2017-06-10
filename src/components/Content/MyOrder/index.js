import React, { Component } from 'react';
import OrderCard from './OrderCard';



const orderList = [{
    "_id": "5933977071be8a59a897d87d",
    "name": "昨夜西风凋碧树",
    "desc": "银装素裹千万家",
    "cover": "cover.jpg",
    "price": 998,
    "number": 3,
    "finished": false,
    "bookTime": "2017-06-13 13:15",
    "created_at": "2017-06-04 13:15"
  },
  {
    "_id": "593376e7b88bce2a5645fac4",
    "name": "风景依旧，烟雨江南",
    "desc": "江南好，风景旧曾谙。",
    "cover": "cover.jpg",
    "price": 666,
    "number": 5,
    "finished": true,
    "bookTime": "2017-06-15 17:15",
    "created_at": "2017-06-04 10:56"
  },
  {
    "_id": "5932f19d77aca11b50275c34",
    "name": "三杯两盏淡酒",
    "desc": "举杯相望，对影成双。",
    "cover": "cover.jpg",
    "price": 999,
    "number": 1,
    "finished": true,
    "bookTime": "2017-06-16 19:15",
    "created_at": "2017-06-04 01:27"
  },
  {
    "_id": "5932ed629bdab312f90d27b7",
    "name": "昨夜西风凋碧树",
    "desc": "一场春风一场醉",
    "cover": "cover.jpg",
    "price": 999,
    "number": 1,
    "finished": false,
    "bookTime": "2017-06-15 10:15",
    "created_at": "2017-06-04 01:09"
  }
];

class MyOrder extends Component {
  render() {
    return (
      <div>
        {orderList.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    );
  }
}

export default MyOrder;
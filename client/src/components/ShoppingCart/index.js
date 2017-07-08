import React, { Component } from 'react';
import CartTable from './CartTable';
import PlaceAnOrder from './PlaceAnOrder';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <CartTable tableData={CartList} />
        <PlaceAnOrder />
      </div>
    );
  }
}

const CartList = [{
    "_id": "5933977071be8a59a897d87d",
    "name": "昨夜西风凋碧树",
    "price": 998,
    "number": 1,
  },
  {
    "_id": "593376e7b88bce2a5645fac4",
    "name": "风景依旧，烟雨江南",
    "price": 666,
    "number": 1,
  },
  {
    "_id": "5932f19d77aca11b50275c34",
    "name": "三杯两盏淡酒",
    "price": 999,
    "number": 1,
  },
  {
    "_id": "5932ed629bdab312f90d27b7",
    "name": "昨夜西风凋碧树",
    "price": 999,
    "number": 1,
  }
];

export default ShoppingCart;

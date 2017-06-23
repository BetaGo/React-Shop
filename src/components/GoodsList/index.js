import React, { Component } from 'react';
import GoodsCard from './GoodsCard';


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
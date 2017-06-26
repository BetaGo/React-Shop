import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoodsCard from '../components/GoodsList/GoodsCard';
import goodsCardActions from './GoodsListRedux';


class GoodsList extends Component {

  render() {
    const goodsList = this.props.goodsList;
    console.log(goodsList);

    return (
      <div>
        {goodsList.map((goods,index) => (
          <GoodsCard key={goods._id} goods={goods} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    goodsList: state.goodsList.goodsList.goodsList,
  }),
  dispatch => ({
    goodsCardActions: bindActionCreators(goodsCardActions, dispatch)
  })
)(GoodsList);
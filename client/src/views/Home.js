import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoodsDetailModal from '../components/Home/GoodsDetailModal';
import GoodsGridList from '../components/Home/GoodsGridList';

// import { detailModalAction, gridListAction } from './HomeRedux';
import * as detailModalActions from '../components/Home/GoodsDetailModalRedux';
import * as gridListActions from '../components/Home/GoodsGridListRedux';

class Home extends Component {
  render() {

    return (
      <div>
        {
          // <GoodsDetailModal />
        }
        <GoodsGridList {...this.props.goodsList} {...this.props.gridAction} />
      </div>
    );
  }
}

export default connect(
  state => ({
    goodsList: state.goods.goodsList,
    goodsDetail: state.goodsDetail,
  }),
  dispatch => ({
    modalAction: bindActionCreators(detailModalActions, dispatch),
    gridAction: bindActionCreators(gridListActions, dispatch),
  })
)(Home);

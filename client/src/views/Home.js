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
    const index = this.props.goodsList.selectedIndex;
    const goodsDetail = this.props.goodsList.goodsList[index];

    return (
      <div>

        <GoodsDetailModal
          {...goodsDetail}
          {...this.props.modalActions}
          {...this.props.goodsDetailModal}
        />

        <GoodsGridList
          {...this.props.goodsList}
          {...this.props.gridActions}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    goodsList: state.goods.goodsList,
    goodsDetailModal: state.goods.goodsDetailModal,
  }),
  dispatch => ({
    modalActions: bindActionCreators(detailModalActions, dispatch),
    gridActions: bindActionCreators(gridListActions, dispatch),
  })
)(Home);

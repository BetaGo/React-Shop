import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoodsDetailModal from '../components/Home/GoodsDetailModal';
import GoodsGridList from '../components/Home/GoodsGridList';

// import { detailModalAction, gridListAction } from './HomeRedux';
import * as detailModalActions from '../components/Home/GoodsDetailModalRedux';
import * as gridListActions from '../components/Home/GoodsGridListRedux';

function Home(props) {
  const index = props.goodsList.selectedIndex;
  const goodsDetail = props.goodsList.goodsList[index];

  return (
    <div>
      <GoodsGridList
        {...props.goodsList}
        {...props.gridActions}
      />

      <GoodsDetailModal
        {...goodsDetail}
        {...props.modalActions}
        {...props.goodsDetailModal}
      />
    </div>
  );
}

Home.propTypes = {
  goodsList: PropTypes.array.isRequired,
  goodsDetailModal: PropTypes.object.isRequired,
  gridActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
};


export default connect(
  state => ({
    goodsList: state.goods.goodsList,
    goodsDetailModal: state.goods.goodsDetailModal,
  }),
  dispatch => ({
    modalActions: bindActionCreators(detailModalActions, dispatch),
    gridActions: bindActionCreators(gridListActions, dispatch),
  }),
)(Home);

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
  return (
    <div>
      <GoodsGridList
        {...props.list}
        {...props.gridActions}
      />

      <GoodsDetailModal
        {...props.modal}
        {...props.modalActions}
      />
    </div>
  );
}

Home.propTypes = {
  list: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  gridActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const goodsList = state.goods.goodsList;
  const goodsDetailModal = state.goods.goodsDetailModal;
  const index = goodsList.selectedIndex;
  const goodsDetail = goodsList.goodsList[index];

  const modal = {
    ...goodsDetail,
    ...goodsDetailModal,
  };

  const list = {
    ...goodsList,
  };

  return {
    modal,
    list,
  };
};


export default connect(
  mapStateToProps,
  dispatch => ({
    modalActions: bindActionCreators(detailModalActions, dispatch),
    gridActions: bindActionCreators(gridListActions, dispatch),
  }),
)(Home);

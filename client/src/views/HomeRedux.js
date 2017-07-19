import { combineReducers } from 'redux';

import goodsDetailModal from '../components/Home/GoodsDetailModalRedux';
import goodsList from '../components/Home/GoodsGridListRedux';

export default combineReducers({
  goodsDetailModal,
  goodsList,
});



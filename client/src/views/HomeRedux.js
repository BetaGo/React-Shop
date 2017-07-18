import { combineReducers } from 'redux';

import goodsDetail from '../components/Home/GoodsDetailModalRedux';
import goodsList from '../components/Home/GoodsGridListRedux';

export default combineReducers({
  goodsDetail,
  goodsList,
});



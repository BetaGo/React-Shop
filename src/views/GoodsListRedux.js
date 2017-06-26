import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import goodsList from '../components/GoodsList/GoodsCardRedux';

export default combineReducers({
  goodsList
});
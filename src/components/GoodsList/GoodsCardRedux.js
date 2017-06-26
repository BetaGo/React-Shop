import goodsList from '../../api/goodsList.json';

// 添加到购物车
function addToCart(index) {
  return {
    type: 'ADD_TO_CART',
    index
  }
}

const initialState = {
  goodsList
}


export default function goodsCard(state = initialState, action) {
  console.log(state, action);
  return state
}
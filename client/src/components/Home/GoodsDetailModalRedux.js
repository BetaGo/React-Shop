const initialState = {
  visible: false,
};


export function showModal() {
  // TODO:
  return {
    type: 'SHOW_MODAL',
  };
}


export function hideModal() {
  // TODO:
  return {
    type: 'HIDE_MODAL',
  };
}

export function seeOthers(e) {
  e.preventDefault();
  return (dispatch) => {
    dispatch({
      type: 'HIDE_MODAL',
    });

    dispatch({
      type: 'SHOW_BOTTOM_NAV',
    });
  };
}


export function addToShoppingCart(e) {
  // TODO:
  /**
   * 在商品详情页面点击添加到购物车按钮
   * =>提交相关数据到服务器
   * =>隐藏商品详情页 Modal
   * =>显示底部BottomNavigation
   */
  e.preventDefault();
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_SHOPPING_CART',
      payload: '',
    });
    dispatch({ type: 'HIDE_MODAL' });
    dispatch({ type: 'SHOW_BOTTOM_NAV' });
  };
}


export function buyNow(e) {
  // TODO:
  e.preventDefault();
  return (dispatch) => {
    dispatch({ type: 'HIDE_MODAL' });
    return dispatch({
      type: 'BUY_NOW',
    });
  };
}


export default function goodsDetail(state = initialState, action) {
  // TODO:
  switch (action.type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        visible: true,
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        visible: false,
      };
    }

    case 'SET_NUMBER_OF_GOODS': {
      return {
        ...state,
        numberOfGoods: action.payload.numberOfGoods,
      };
    }

    default:
      return state;
  }
}

const initialState = {
  open: false,
};


export function openModal() {
  // TODO:
  return {
    type: 'OPEN_MODAL',
  };
}


export function closeModal() {
  // TODO:
  return {
    type: 'CLOSE_MODAL',
  };
}

export function seeOthers(e) {
  e.preventDefault();
  return (dispatch) => {
    dispatch({
      type: 'CLOSE_MODAL',
    });

    dispatch({
      type: 'OPEN_BOTTOM_NAV',
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
    dispatch({ type: 'CLOSE_MODAL' });
    dispatch({ type: 'OPEN_BOTTOM_NAV' });
  };
}


export function buyNow(e) {
  // TODO:
  e.preventDefault();
  return (dispatch) => {
    dispatch({ type: 'CLOSE_MODAL' });
    return dispatch({
      type: 'BUY_NOW',
    });
  };
}


export default function goodsDetail(state = initialState, action) {
  // TODO:
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        open: true,
      };
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        open: false,
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

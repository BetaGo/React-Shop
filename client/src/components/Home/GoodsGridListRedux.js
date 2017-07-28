const initialState = {
  goodsList: [],
  loading: true,
  error: false,
  selectedIndex: 0,
};

export function loadGoodsList() {
  /*
  return {
    url: '/api/goods/goods-list',
    types: ['LOAD_GOODS_LIST', 'LOAD_GOODS_LIST_SUCCESS', 'LOAD_GOODS_LIST_ERROR']
  }
  */
  return (dispatch) => {
    dispatch({ type: 'LOAD_GOODS_LIST' });
    return fetch('/api/goods/goods-list')
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: 'LOAD_GOODS_LIST_SUCCESS',
          payload: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'LOAD_GOODS_LIST_ERROR',
          payload: error,
        });
      });
  };
}

export function addToShoppingCart(e) {
  /**
   * 点击商品卡片上的 添加到购物车ICON:
   * =>提交信息到服务器
   * =>显示顶部AppBar
   * =>显示底部BottomNavigation
   */
  e.stopPropagation();
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_SHOPPING_CART',
      payload: {
        // TODO:
      },
    });
    dispatch({
      type: 'SHOW_BOTTOM_NAV',
    });
    dispatch({
      type: 'SHOW_APP_BAR',
    });
  };
}

export function setSelectedIndex(index) {
  // console.log(index);
  return {
    type: 'SET_SELECTED_INDEX',
    payload: index,
  };
}

export function showGoodsDetail(index) {
  return (dispatch) => {
    dispatch({
      type: 'SET_SELECTED_INDEX',
      payload: index,
    });
    dispatch({
      type: 'HIDE_BOTTOM_NAV',
    });
    dispatch({
      type: 'SHOW_MODAL',
    });
  };
}

export default function goodsList(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'LOAD_GOODS_LIST': {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case 'LOAD_GOODS_LIST_SUCCESS': {
      return {
        ...state,
        goodsList: action.payload,
        loading: false,
        error: false,
      };
    }

    case 'LOAD_GOODS_LIST_ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case 'ADD_TO_SHOPPING_CART': {
      return {
        ...state,
        // TODO:
      };
    }

    case 'SET_SELECTED_INDEX': {
      return {
        ...state,
        selectedIndex: action.payload,
      };
    }

    default:
      return state;
  }
}

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
    return fetch('/api/goods/')
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

export function loadCartsList() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_CARTS_LIST' });
    return fetch('/api/cart/?userId=1')
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: 'LOAD_CARTS_LIST_SUCCESS',
          payload: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'LOAD_CARTS_LIST_ERROR',
          payload: error,
        });
      });
  };
}

export function addToShoppingCart(e, id, quantity) {
  /**
   * 点击商品卡片上的 添加到购物车ICON:
   * =>提交信息到服务器
   * =>显示顶部AppBar
   * =>显示底部BottomNavigation
   */

  // e.stopPropagation();
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const formData = new FormData();
  formData.append('userId', 1);
  formData.append('commodityId', id);
  formData.append('quantity', quantity || 1);

  const data = `userId=${1}&commodityId=${id}&quantity=${quantity || 1}`;
  const fetchInit = {
    method: 'POST',
    headers: fetchHeaders,
    body: data,
  };

  return (dispatch) => {
    dispatch({
      type: 'OPEN_BOTTOM_NAV',
    });
    return fetch('/api/cart', fetchInit)
    .then(response => response.json())
    .then((json) => {
      if (json.success !== 0) {
        dispatch({
          type: 'ADD_TO_SHOPPING_CART',
        });
      } else {
        dispatch({
          type: 'ADD_TO_SHOPPING_CART_ERROR',
          payload: json,
        });
      }
      return json;
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
      type: 'OPEN_MODAL',
    });
  };
}

export function showNotice(message) {
  return {
    type: 'OPEN_NOTICE',
    payload: message,
  };
}

export function showBottomNav() {
  return {
    type: 'OPEN_BOTTOM_NAV',
  };
}

export function hideBottomNav() {
  return {
    type: 'CLOSE_BOTTOM_NAV',
  };
}

export function showAppBar() {
  return {
    type: 'OPEN_APP_BAR',
  };
}

export function hideAppBar() {
  return {
    type: 'CLOSE_APP_BAR',
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

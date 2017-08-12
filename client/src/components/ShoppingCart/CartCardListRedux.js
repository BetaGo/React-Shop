const initialState = {
  goods: [],
  loading: true,
  error: false,
};

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

export function addCommodityToCart(e, userId, commodityId, quantity) {
  /**
   * 点击商品卡片上的 添加到购物车ICON:
   * =>提交信息到服务器
   * =>显示顶部AppBar
   * =>显示底部BottomNavigation
   */

  // e.stopPropagation();
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  // const formData = new FormData();
  // formData.append('userId', userId);
  // formData.append('commodityId', commodityId);
  // formData.append('quantity', quantity || 1);

  const data = `userId=${userId}&commodityId=${commodityId}&quantity=${quantity || 1}`;
  const fetchInit = {
    method: 'POST',
    headers: fetchHeaders,
    body: data,
  };

  return dispatch => (
    fetch('/api/cart', fetchInit)
    .then(response => response.json())
    .then((json) => {
      if (json.success !== 0) {
        dispatch({
          type: 'ADD_TO_SHOPPING_CART_SUCCESS',
        });
      } else {
        dispatch({
          type: 'ADD_TO_SHOPPING_CART_ERROR',
          payload: json,
        });
      }
      return json;
    })
  );
}

export function deleteCommodity(userId, commodityId) {
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const data = `userId=${userId}&commodityId=${commodityId}`;
  const fetchInit = {
    method: 'DELETE',
    headers: fetchHeaders,
    body: data,
  };
  return dispatch => (
    fetch('/api/cart', fetchInit)
    .then(res => res.json())
    .then((json) => {
      if (json.success === 1) {
        dispatch({
          type: 'DELETE_COMMODITY_FROM_CART_SUCCESS',
          payload: commodityId,
        });
      }
      return json;
    })
  );
}

// export function deleteCommodityWithNotice(userId, commodity, message) {
//   return (dispatch) => {
//     Promise.resolve(deleteCommodity(userId, commodityId))
//     .then((msg) => {
//       if (msg.success === 1) {
//         dispatch({
//           type: 'OPEN_NOTICE',
//           payload: message,
//         })
//       }
//     })
// }

export function deleteCommodityWithNotice(userId, commodityId, message) {
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const data = `userId=${userId}&commodityId=${commodityId}`;
  const fetchInit = {
    method: 'DELETE',
    headers: fetchHeaders,
    body: data,
  };
  return (dispatch) => {
    fetch('/api/cart', fetchInit)
    .then(res => res.json())
    .then((json) => {
      if (json.success === 1) {
        dispatch({
          type: 'DELETE_COMMODITY_FROM_CART_SUCCESS',
          payload: commodityId,
        });
      }
      return json;
    })
    .then((msg) => {
      if (msg.success === 1) {
        dispatch({
          type: 'OPEN_NOTICE',
          payload: message,
        });
      }
    });
  };
}

export function openBottomNav() {
  return {
    type: 'OPEN_BOTTOM_NAV',
  };
}

export function closeBottomNav() {
  return {
    type: 'CLOSE_BOTTOM_NAV',
  };
}

export function openAppBar() {
  return {
    type: 'OPEN_APP_BAR',
  };
}

function deleteCommodityById(state, commodityId) {
  const goods = state.goods;
  const newGoods = goods.filter(commodity => commodity.commodity_id !== commodityId);
  return newGoods;
}

export default function cartCardList(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CARTS_LIST': {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case 'LOAD_CARTS_LIST_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: false,
        goods: action.payload,
      };
    }

    case 'LOAD_CARTS_LIST_ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case 'ADD_TO_SHOPPING_CART_SUCCESS': {
      return {
        ...state,
      };
    }

    case 'ADD_TO_SHOPPING_CART_ERROR': {
      return {
        ...state,
      };
    }
    case 'DELETE_COMMODITY_FROM_CART_SUCCESS': {
      const commodityId = action.payload;
      const goods = deleteCommodityById(state, commodityId);
      return {
        ...state,
        goods,
      };
    }

    default:
      return state;
  }
}

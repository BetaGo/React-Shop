const initialState = {
  goodsList: [],
  loading: true,
  error: false,
};

export function loadGoodsList() {
  /*
  return {
    url: '/api/goods/goods-list',
    types: ['LOAD_GOODS_LIST', 'LOAD_GOODS_LIST_SUCCESS', 'LOAD_GOODS_LIST_ERROR']
  }
  */
  return dispatch => {
    dispatch({ type: 'LOAD_GOODS_LIST'});
    return fetch('/api/goods/goods-list')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'LOAD_GOODS_LIST_SUCCESS',
          payload: json,
        });
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_GOODS_LIST_ERROR',
          payload: error,
        });
      });
  }
}

export function addToShoppingCart(e) {
  e.stopPropagation();
  return {
    type: 'ADD_TO_SHOPPING_CART',
    payload: {
      // TODO:
    }
  }
}

export function showGoodsDetail(e) {
  return {
    type: 'SHOW_GOODS_DETAIL',
    payload: {
      // TODO:
    }
  }
}

export default function goodsList(state = initialState, action) {
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
        error: false
      };
    }

    case 'LOAD_GOODS_LIST_ERROR': {
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    case 'ADD_TO_SHOPPING_CART': {
      return {
        ...state,
        // TODO:
      }
    }

    case 'SHOW_GOODS_DETAIL': {
      return {
        ...state,
        // TODO:
      }
    }

    default:
      return state;
  }
}
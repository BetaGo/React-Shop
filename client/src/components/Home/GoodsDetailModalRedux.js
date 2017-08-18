const initialState = {
  open: false,
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

export function openBottomNav() {
  return {
    type: 'OPEN_BOTTOM_NAV',
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

export function showNotice(message) {
  return {
    type: 'OPEN_NOTICE',
    payload: message,
  };
}

export function addToShoppingCart(e, id, quantity) {
  // e.preventDefault();
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const data = `userId=${1}&commodityId=${id}&quantity=${quantity || 1}`;
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
          type: 'ADD_TO_SHOPPING_CART',
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

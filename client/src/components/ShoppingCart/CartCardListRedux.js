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

    default:
      return state;
  }
}

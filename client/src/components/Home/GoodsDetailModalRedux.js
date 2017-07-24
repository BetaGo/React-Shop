const initialState = {
  numberOfGoods: 1,
  visible: false,
};

export function setNumberOfGoods(e) {
  const receivedValue = e.target.value;
  let numberOfGoods = null;
  try {
    numberOfGoods = parseInt(receivedValue, 10);
  } catch (err) {
    console.log(err.message);
  }
  return {
    type: 'SET_NUMBER_OF_GOODS',
    payload: {
      numberOfGoods: numberOfGoods || 0,
    },
  };
}


export function showModal() {
  // TODO:
  console.log('action: showModal');
  return {
    type: 'SHOW_MODAL',
  };
}


export function hideModal() {
  // TODO:
  console.log('action: hideModal');
  return {
    type: 'HIDE_MODAL',
  };
}


export function addNumberOfGoods() {
  // TODO:
  console.log('action: addNumberOfGoods');
  return {
    type: 'ADD_NUMBER_OF_GOODS',
  };
}


export function reduceNumberOfGoods() {
  // TODO:
  console.log('action: reduceNumber');
  return {
    type: 'REDUCE_NUMBER_OF_GOODS',
  };
}


export function addToShoppingCart() {
  // TODO:
  return (dispatch) => {
    dispatch({ type: 'HIDE_MODAL' });
    return dispatch({
      type: 'ADD_TO_SHOPPING_CART',
    });
  };
}


export function buyNow() {
  // TODO:
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

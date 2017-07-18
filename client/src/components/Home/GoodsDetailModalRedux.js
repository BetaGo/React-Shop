const initialState = {
  goodsDetail: {},
  numberOfGoods: 1,
  visible: false,
};

export function setNumberOfGoods(e) {
  return {
    type: 'SET_NUMBER_OF_GOODS',
    payload: {
      numberOfGoods: e.target.value
    }
  };
}


export function showModal() {
  // TODO:
  console.log('action: showModal');
  return {
    type: 'SHOW_MODAL'
  };
}


export function hideModal() {
  // TODO:
  console.log('action: hideModal')
  return {
    type: 'HIDE_MODAL'
  };
}


export function addNumberOfGoods() {
  // TODO:
  console.log('action: addNumberOfGoods');
}


export function reduceNumber() {
  // TODO:
  console.log('action: reduceNumber');
}


export function addToShoppingCart() {
  // TODO:
  console.log('action: addToShoppingCart');
}


export function buyNow() {
  // TODO:
  console.log('action: buyNow');
}


export default function goodsDetail( state = initialState, action) {
  // TODO:
  return state;
}

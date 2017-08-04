import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartCardList from '../components/ShoppingCart/CartCardList';

// Action
import * as cartCardListActions from '../components/ShoppingCart/CartCardListRedux';

function ShoppingCart(props) {
  return (
    <div>
      <CartCardList {...props.cartCardList} {...props.cartCardListActions} />
    </div>
  );
}

ShoppingCart.propTypes = {
  cartCardList: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    cartCardList: state.shoppingCart.cartCardList,
  }),
  dispatch => ({
    cartCardListActions: bindActionCreators(cartCardListActions, dispatch),
  }),
)(ShoppingCart);


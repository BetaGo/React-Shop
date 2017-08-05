import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '../components/Shell/AppBar';
import BottomNavigation from '../components/Shell/BottomNavigation';
import Drawer from '../components/Shell/Drawer';

import * as appBarActions from '../components/Shell/AppBarRedux';
import * as bottomNavigationActions from '../components/Shell/BottomNavigationRedux';
import * as drawerActions from '../components/Shell/DrawerRedux';

import { loadGoodsList } from '../components/Home/GoodsGridListRedux';
import { loadCartsList } from '../components/ShoppingCart/CartCardListRedux';

const loadActions = { loadGoodsList, loadCartsList };

function Shell(props) {
  const { cartList } = props;
  const cartLength = cartList.goods.length;
  return (
    <div>
      <AppBar {...props.appBar} {...props.appBarActions} />
      <BottomNavigation
        {...props.bottomNavigation}
        cartLength={cartLength}
        {...props.loadActions}
      />
      <Drawer {...props.drawer} {...props.drawerActions} />
    </div>
  );
}

Shell.propTypes = {
  appBar: PropTypes.object.isRequired,
  appBarActions: PropTypes.object.isRequired,
  bottomNavigation: PropTypes.object.isRequired,
  drawer: PropTypes.object.isRequired,
  drawerActions: PropTypes.object.isRequired,
  loadActions: PropTypes.object.isRequired,
};

Shell.defaultProps = {
  cartLength: 0,
};


export default connect(
  state => ({
    appBar: state.shell.appBar,
    bottomNavigation: state.shell.bottomNavigation,
    drawer: state.shell.drawer,
    cartList: state.shoppingCart.cartCardList,
  }),
  dispatch => ({
    appBarActions: bindActionCreators(appBarActions, dispatch),
    bottomNavigationActions: bindActionCreators(bottomNavigationActions, dispatch),
    drawerActions: bindActionCreators(drawerActions, dispatch),
    loadActions: bindActionCreators(loadActions, dispatch),
  }),
)(Shell);

// export default Shell;

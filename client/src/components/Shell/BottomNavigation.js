import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import IconShoppingCart from 'material-ui-icons/ShoppingCart';
import IconExplore from 'material-ui-icons/Explore';
import IconPerson from 'material-ui-icons/Person';
import { NavLink } from 'react-router-dom';


const styleSheet = createStyleSheet('BottomNavigationSimple', {
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    willChange: 'transform',
    transition: '0.2s ease-out',
    zIndex: 1,
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    outline: 'none',
  },
  hidden: {
    transform: 'translateY(80px)',
  },
});

function getValue(__pathname) {
  const re = /^\/([A-Za-z0-9_-]+)\/*/;
  const path = re.exec(__pathname) ? re.exec(__pathname)[1] : '';

  switch (path) {
    case 'goods-list': {
      return 0;
    }

    case 'shopping-cart': {
      return 1;
    }

    case 'my-order': {
      return 2;
    }

    default:
      return '';
  }
}


class BottomNavigationSimple extends Component {
  componentDidMount() {
    this.props.loadGoodsList();
    this.props.loadCartsList();
  }

  render() {
    const { pathname, classes, open, cartLength } = this.props;
    const shoppingCartIcon = <IconShoppingCart />;
    const goodsListIcon = <IconExplore />;
    const myOrderIcon = <IconPerson />;
    const shoppingCartIconWidthBadge = (
      <div>
        <Badge
          badgeContent={cartLength}
          color="accent"
        >
          <IconShoppingCart />
        </Badge>
      </div>
    );

    const value = getValue(pathname);
    return (
      <div
        className={classNames(
          classes.root,
          {
            [classes.hidden]: !open,
          },
        )}
      >
        <BottomNavigation value={value} showLabels>

          <BottomNavigationButton
            label={
              <span>
                商品列表
                <NavLink className={classes.link} to="/goods-list" />
              </span>
            }
            icon={goodsListIcon}
          />

          <BottomNavigationButton
            label={
              <span>
                购物车
                <NavLink className={classes.link} to="/shopping-cart" />
              </span>
            }
            icon={cartLength > 0 ? shoppingCartIconWidthBadge : shoppingCartIcon}
          />

          <BottomNavigationButton
            label={
              <span>
                我的订单
                <NavLink className={classes.link} to="/my-order" />
              </span>
            }
            icon={myOrderIcon}
          />
        </BottomNavigation>
      </div>
    );
  }
}

BottomNavigationSimple.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  cartLength: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  loadCartsList: PropTypes.func.isRequired,
  loadGoodsList: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(BottomNavigationSimple);

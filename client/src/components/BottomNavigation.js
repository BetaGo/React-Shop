import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import IconShoppingCart from 'material-ui-icons/ShoppingCart';
import IconExplore from 'material-ui-icons/Explore';
import IconPerson from 'material-ui-icons/Person';
import { NavLink } from 'react-router-dom';

const shoppingCartIcon = <IconShoppingCart />;
const goodsListIcon = <IconExplore />;
const myOrderIcon = <IconPerson />;

const styleSheet = createStyleSheet('BottomNavigationSimple', {
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    willChange: 'transform',
    transition: '0.2s ease',
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
});

class BottomNavigationSimple extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const classes = this.props.classes;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>

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
            icon={shoppingCartIcon}
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
};

export default withStyles(styleSheet)(BottomNavigationSimple);

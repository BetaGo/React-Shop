import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import IconExplore from 'material-ui/svg-icons/action/explore';
import IconPerson from 'material-ui/svg-icons/social/person';
import { Link } from 'react-router-dom';

const shoppingCartIcon = <IconShoppingCart />;
const goodsListIcon = <IconExplore />;
const myBillIcon = <IconPerson />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

class BottomNavigationSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="商品列表"
              icon={goodsListIcon}
              onTouchTap={() => this.select(0)}
              containerElement={<Link to="/goods-list"/>}
            />

            <BottomNavigationItem
              label="购物车"
              icon={shoppingCartIcon}
              onTouchTap={() => this.select(1)}
              containerElement={<Link to="/shopping-cart"/>}
            />

            <BottomNavigationItem
            label="我的订单"
            icon={myBillIcon}
            onTouchTap={() => this.select(2)}
            containerElement={<Link to="/my-bill"/>}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationSimple;
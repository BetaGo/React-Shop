import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import CartCard from './CartCard';
import CartActionBar from './CartActionBar';
import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('CartCardList', theme => ({
  root: {
    margin: '56px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      margin: '48px 0',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '64px 0',
    },
  },
}));


class CartCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    // 强制显示顶部 AppBar
    this.props.openAppBar();
    this.props.closeBottomNav();
  }

  getTotalPrice() {
    const { goods } = this.props;
    const { cart } = this.state;
    const cartName = cart.map(a => a.name);
    let total = 0;
    for (let i = 0; i < goods.length; i += 1) {
      if (cartName.indexOf(goods[i].commodity_id.toString()) !== -1) {
        total += goods[i].price * goods[i].quantity;
      }
    }
    return total.toFixed(2);
  }

  handleSelect(e) {
    const { name, value, checked } = e.target;
    let { cart } = this.state;
    const cartName = cart.map(a => a.name);
    if (!checked && cartName.indexOf(name) === -1) {
      cart.push({ name, value });
    } else {
      cart = cart.filter(a => a.name !== name);
    }

    this.setState({
      cart,
    });
  }

  handleSelectAll() {
    const { goods } = this.props;
    let { cart } = this.state;
    if (goods.length === cart.length) {
      cart = [];
    } else {
      cart = goods.map(commodity => ({
        name: commodity.commodity_id.toString(), value: commodity.quantity.toString(),
      }));
    }
    this.setState({
      cart,
    });
  }

  render() {
    const { classes, goods, loading, error } = this.props;
    const { openBottomNav,
      deleteCommodityWithNotice,
      addCommodityToCart,
      loadCartsList,
    } = this.props;
    const cartName = this.state.cart.map(a => a.name);

    if (error) {
      return (
        <div className={classes.root}>
          出了点差错
        </div>
      );
    }

    if (goods.length === 0) {
      // 如果购物车为空，强制显示底部导航栏。
      // openBottomNav();
      return (
        <div className={classes.root}>
          购物车里面什么都没有。。
        </div>
      );
    }

    return (
      <div className={classes.root}>
        {loading ? <LoadingCircle /> : null}
        {
          goods.map(commodity => (
            <CartCard
              {...commodity}
              isSelected={cartName.indexOf(commodity.commodity_id.toString()) !== -1}
              handleSelect={this.handleSelect}
              key={`cart-card-${commodity.commodity_id}`}
              deleteCommodityWithNotice={deleteCommodityWithNotice}
              addCommodityToCart={addCommodityToCart}
              loadCartsList={loadCartsList}
            />
          ))
        }
        <CartActionBar
          totalPrice={this.getTotalPrice()}
          handleSelectAll={this.handleSelectAll}
          isSelectedAll={this.state.cart.length === this.props.goods.length}
          totalQuantity={this.state.cart.length}
        />
      </div>
    );
  }
}

CartCardList.propTypes = {
  classes: PropTypes.object.isRequired,
  goods: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  deleteCommodityWithNotice: PropTypes.func.isRequired,
  openAppBar: PropTypes.func.isRequired,
  openBottomNav: PropTypes.func.isRequired,
  closeBottomNav: PropTypes.func.isRequired,
  addCommodityToCart: PropTypes.func.isRequired,
  loadCartsList: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(CartCardList);

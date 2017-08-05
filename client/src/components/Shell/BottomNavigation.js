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


class BottomNavigationSimple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }


  componentWillMount() {
    const url = window.location.pathname;
    const re = /^\/([A-Za-z0-9_-]+)\/*/;

    const path = re.exec(url) ? re.exec(url)[1] : '';

    switch (path) {
      case 'goods-list': {
        this.setState({
          value: 0,
        });
        break;
      }

      case 'shopping-cart': {
        this.setState({
          value: 1,
        });
        break;
      }

      case 'my-order': {
        this.setState({
          value: 2,
        });
        break;
      }

      default:
        break;
    }
  }

  componentDidMount() {
    this.props.loadGoodsList();
    this.props.loadCartsList();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const classes = this.props.classes;
    const { hidden, cartLength } = this.props;
    const { value } = this.state;

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
    const shoppingCartIcon = <IconShoppingCart />;
    const goodsListIcon = <IconExplore />;
    const myOrderIcon = <IconPerson />;

    return (
      <div
        className={classNames(
          classes.root,
          {
            [classes.hidden]: hidden,
          },
        )}
      >
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
  hidden: PropTypes.bool.isRequired,
  cartLength: PropTypes.number.isRequired,
  loadCartsList: PropTypes.func.isRequired,
  loadGoodsList: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(BottomNavigationSimple);

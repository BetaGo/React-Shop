import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import IconButton from 'material-ui/IconButton';
import IconShoppingCart from 'material-ui-icons/ShoppingCart';
import IconExplore from 'material-ui-icons/Explore';
import IconPerson from 'material-ui-icons/Person';
import IconArrowUp from 'material-ui-icons/KeyboardArrowUp';
import IconArrowDown from 'material-ui-icons/KeyboardArrowDown';


const styleSheet = createStyleSheet('CartActionBar', theme => ({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    willChange: 'transform',
    transition: '0.2s ease-out',
    zIndex: 1,
    transform: 'translateY(56px)',
  },
  showBottomNav: {
    transform: 'translateY(0)',
  },
  label: {
    padding: 12,
  },
  total: {
    lineHeight: '56px',
  },
  arrow: {
    position: 'absolute',
    top: -48,
    left: 0,
    background: 'rgba(22,22,22,.2)',
  },
  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    outline: 'none',
  },
  actionNav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: theme.palette.background.paper,
  },
}));

class CartActionBar extends Component {

  state = {
    isShowBottomNav: false,
  }

  getBottomNav() {
    const { classes } = this.props;
    const shoppingCartIcon = <IconShoppingCart />;
    const goodsListIcon = <IconExplore />;
    const myOrderIcon = <IconPerson />;

    return (
      <BottomNavigation value={1} showLabels>

        <BottomNavigationButton
          label={
            <span>
              <NavLink className={classes.link} to="/goods-list" />
            </span>
          }
          icon={goodsListIcon}
        />

        <BottomNavigationButton
          label={
            <span>
              <NavLink className={classes.link} to="/shopping-cart" />
            </span>
          }
          icon={shoppingCartIcon}
        />

        <BottomNavigationButton
          label={
            <span>
              <NavLink className={classes.link} to="/my-order" />
            </span>
          }
          icon={myOrderIcon}
        />
      </BottomNavigation>
    );
  }

  getActionNav() {
    const { classes, handleSelectAll } = this.props;
    return (
      <div className={classes.actionNav} >
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.isSelectedAll}
              value="checkedAll"
            />
          }
          className={classes.label}
          label="全选"
          onTouchTap={handleSelectAll}
        />
        <div className={classes.total}>
          总计：￥{this.props.total}
        </div>
        <Button color="accent" raised>
          去结算(5)
        </Button>
      </div>
    );
  }

  getArrowButton() {
    const { classes } = this.props;
    return (
      <IconButton
        className={classes.arrow}
        onTouchTap={() => { this.setState({ isShowBottomNav: !this.state.isShowBottomNav }); }}
      >
        {this.state.isShowBottomNav ? <IconArrowDown /> : <IconArrowUp />}
      </IconButton>
    );
  }
  render() {
    const { classes } = this.props;
    const className = classNames(
      classes.root,
      {
        [classes.showBottomNav]: this.state.isShowBottomNav,
      },
    );
    return (
      <div className={className}>
        {this.getActionNav()}
        {this.getBottomNav()}
        {this.getArrowButton()}
      </div>
    );
  }
}

CartActionBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isSelectedAll: PropTypes.bool.isRequired,
  handleSelectAll: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default withStyles(styleSheet)(CartActionBar);

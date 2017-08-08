import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import QuantityWrapper from '../shared/QuantityWrapper/QuantityWrapper';

const styleSheet = createStyleSheet('CartCard', {
  card: {
    maxHeight: 180,
    maxWidth: 365,
    margin: '6px auto',
  },
  header: {
    position: 'relative',
    height: 48,
    overflow: 'hidden',
  },
  title: {
    lineHeight: '48px',
    textOverflow: 'ellipsis',
    height: '100%',
    padding: '0 48px',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  content: {
    display: 'flex',
  },
  checkbox: {
    margin: 'auto',
  },
  cover: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    margin: 'auto',
  },
  detail: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexCenter: {
    margin: 'auto',
  },
  deleteButton: {

  },
});

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
      open: false,
      anchorEl: undefined,
    };

    this.addNumberOfGoods = this.addNumberOfGoods.bind(this);
    this.reduceNumberOfGoods = this.reduceNumberOfGoods.bind(this);
    this.inputNumberOfGoods = this.inputNumberOfGoods.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  addNumberOfGoods(e) {
    // TODO: 与服务器通讯，检查商品数量是否充足
    e.preventDefault();
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  reduceNumberOfGoods(e) {
    e.preventDefault();
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  }

  inputNumberOfGoods(e) {
    // TODO: 与服务器通讯，检查商品数量是否充足
    const receivedValue = e.target.value;
    let quantity = null;
    try {
      quantity = parseInt(receivedValue, 10);
    } catch (err) {
      console.log(err.message);
    }
    this.setState({
      quantity: quantity || 0,
    });
  }

  handleOpenMenu(e) {
    e.preventDefault();
    this.setState({ open: true, anchorEl: e.currentTarget });
  }

  handleCloseMenu() {
    this.setState({ open: false });
  }

  render() {
    const classes = this.props.classes;
    // TODO:
    const { quantity } = this.state;
    const { name, price, cover, commodity_id } = this.props;
    const { deleteCommodityWithNotice } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Typography
              type="subheading"
              className={classes.title}
            >
              {name}
            </Typography>
            <IconButton className={classes.menu}>
              <MoreVertIcon onTouchTap={this.handleOpenMenu} />
            </IconButton>
            <Menu
              className={classes.menu}
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleCloseMenu}
            >
              <MenuItem onTouchTap={() => deleteCommodityWithNotice(1, commodity_id, `😃已将${name}移出购物车。`)}>
                删除
              </MenuItem>
            </Menu>
          </div>
          <div className={classes.content}>
            <div className={classes.checkbox}>
              <Checkbox />
            </div>
            <div className={classes.cover}>
              <img className={classes.img} src={cover} alt={name} />
            </div>
            <div className={classes.detail}>
              <CardContent>
                <span>￥{price}</span>
                <div className={classes.actions}>
                  <div className={classes.flexCenter}>
                    <QuantityWrapper
                      quantity={quantity}
                      handleAdd={this.addNumberOfGoods}
                      handleRemove={this.reduceNumberOfGoods}
                      handleOnchange={this.inputNumberOfGoods}
                    />
                  </div>
                  {/* <Button
                    color="accent"
                    onTouchTap={() => deleteCommodity(1, commodity_id)}
                  >
                    删除
                  </Button> */}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

CartCard.propTypes = {
  classes: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  commodity_id: PropTypes.number.isRequired,
  deleteCommodityWithNotice: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(CartCard);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import ExploreIcon from 'material-ui-icons/Explore';

import Carousel from '../shared/Carousel/Carousel';
import QuantityWrapper from '../shared/QuantityWrapper/QuantityWrapper';

const styleSheet = createStyleSheet('GoodsDetailModal', {
  carousel: {
    width: '100vw',
    height: 'calc(100vw * 0.75)',
    margin: '-24px -24px 0',
  },
  content: {
    padding: '0 2em',
  },
  numberActionContainer: {
    display: 'flex',
    maxWidth: '9em',
  },
  numberOfGoods: {
    margin: 'auto',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

class GoodsDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.addNumberOfGoods = this.addNumberOfGoods.bind(this);
    this.reduceNumberOfGoods = this.reduceNumberOfGoods.bind(this);
    this.inputNumberOfGoods = this.inputNumberOfGoods.bind(this);
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

  render() {
    const { quantity } = this.state;
    const classes = this.props.classes;
    const { open, images, name, desc, remain } = this.props;
    const {
      seeOthers,
      addToShoppingCart,
      buyNow,
      } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          transition={<Slide direction="down" />}
        >
          <DialogContent>
            <div className={classes.carousel}>
              <Carousel images={images} />
            </div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <QuantityWrapper
              quantity={quantity}
              handleOnchange={this.inputNumberOfGoods}
              handleRemove={this.reduceNumberOfGoods}
              handleAdd={this.addNumberOfGoods}
            />
            {/* <div className={classes.numberActionContainer}>
              <IconButton
                tooltip="reduce"
                onTouchTap={reduceNumberOfGoods}
              >
                <RemoveCircleIcon />
              </IconButton>
              <TextField
                name="numberOfGoods"
                value={numberOfGoods}
                onChange={setNumberOfGoods}
                className={classes.numberOfGoods}
              />
              <IconButton
                tooltip="add"
                onTouchTap={addNumberOfGoods}
              >
                <AddCircleIcon />
              </IconButton>
            </div> */}
            <span>剩余数量： {remain}</span>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button onTouchTap={seeOthers}>
              <ExploreIcon />
              看看别的
            </Button>
            <Button color="primary" onTouchTap={addToShoppingCart}>
              <AddShoppingCartIcon />
              加入购物车
            </Button>
            <Button color="accent" onTouchTap={buyNow}>
              <CreditCardIcon />
              立即购买
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}


GoodsDetailModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  images: PropTypes.array,
  name: PropTypes.string,
  desc: PropTypes.string,
  remain: PropTypes.number,

  seeOthers: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
};

GoodsDetailModal.defaultProps = {
  classes: PropTypes.object.isRequired,
  open: false,
  images: [],
  name: ' ',
  desc: ' ',
  remain: 1,
};

export default withStyles(styleSheet)(GoodsDetailModal);

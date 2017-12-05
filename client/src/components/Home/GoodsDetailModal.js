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

import Viewer from '../shared/3DViewer/Viewer';

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
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillReceiveProps() {
    // 默认数量为 1
    this.setState({
      quantity: 1,
    });
  }

  addNumberOfGoods(e) {
    // TODO: 与服务器通讯，检查商品数量是否充足
    e.preventDefault();
    let { quantity } = this.state;
    quantity = (quantity + 1 <= this.props.remain) ? quantity + 1 : quantity;
    this.setState({
      quantity,
    });
  }

  reduceNumberOfGoods(e) {
    // TODO: 与服务器通讯，检查商品数量是否充足
    e.preventDefault();
    let { quantity } = this.state;
    quantity = (quantity > 1) ? quantity - 1 : quantity;
    this.setState({
      quantity,
    });
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
    if (quantity && quantity > this.props.remain) {
      quantity = this.props.remain;
    } else if (quantity && quantity <= 0) {
      quantity = 1;
    }
    this.setState({
      quantity: quantity || 0,
    });
  }

  addToCart(e, commodityId, quantity) {
    const { addToShoppingCart, loadCartsList, closeModal, showNotice, openBottomNav } = this.props;
    e.preventDefault();
    return Promise.resolve({ e, commodityId, quantity })
    .then(msg => addToShoppingCart(msg.e, msg.commodityId, quantity))
    .then((msg) => {
      console.log(`msg: ${msg}`);
      if (msg && msg.success !== 0) {
        loadCartsList();
        closeModal();
        openBottomNav();
      } else {
        showNotice('添加商品到购物车失败！');
      }
      return msg;
    });
  }

  render() {
    const { quantity } = this.state;
    const classes = this.props.classes;
    const { commodity_id, open, images, name, desc, remain } = this.props;
    const {
      seeOthers,
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
              {/* <Carousel images={images} /> */}
              <Viewer
                modelConfig={{
                  modelURL: '/3DModels/pussy_in_boots.json',
                }}
                className={classes.carousel}
              />
            </div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <QuantityWrapper
              quantity={quantity}
              handleOnchange={this.inputNumberOfGoods}
              handleRemove={this.reduceNumberOfGoods}
              handleAdd={this.addNumberOfGoods}
              disableRemove={quantity <= 1}
              disableAdd={quantity >= remain}
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
            <Button color="primary" onTouchTap={e => this.addToCart(e, commodity_id, quantity)}>
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
  commodity_id: PropTypes.number,
  open: PropTypes.bool,
  images: PropTypes.array,
  name: PropTypes.string,
  desc: PropTypes.string,
  remain: PropTypes.number,

  seeOthers: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
  loadCartsList: PropTypes.func.isRequired,
  showNotice: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  openBottomNav: PropTypes.func.isRequired,
};

GoodsDetailModal.defaultProps = {
  open: false,
  images: [],
  name: ' ',
  desc: ' ',
  remain: 1,
  commodity_id: 1,
};

export default withStyles(styleSheet)(GoodsDetailModal);

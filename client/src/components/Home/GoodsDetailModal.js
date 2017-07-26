import React from 'react';
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
});

function GoodsDetailModal(props) {
  const classes = props.classes;
  const { visible, images, name, desc, remain, numberOfGoods } = props;
  const {
    reduceNumberOfGoods,
    setNumberOfGoods,
    addNumberOfGoods,
    hideModal,
    addToShoppingCart,
    buyNow,
    } = props;

  return (
    <div>
      <Dialog
        fullScreen
        open={visible}
        transition={<Slide direction="down" />}
      >
        <DialogContent>
          <div className={classes.carousel}>
            <Carousel images={images} />
          </div>
          <h2>{name}</h2>
          <p>{desc}</p>
          <QuantityWrapper
            quantity={numberOfGoods}
            handleOnchange={setNumberOfGoods}
            handleRemove={reduceNumberOfGoods}
            handleAdd={addNumberOfGoods}
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
        <DialogActions>
          <Button onTouchTap={hideModal}>
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


GoodsDetailModal.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  images: PropTypes.array,
  name: PropTypes.string,
  desc: PropTypes.string,
  remain: PropTypes.number,
  numberOfGoods: PropTypes.number,

  reduceNumberOfGoods: PropTypes.func.isRequired,
  setNumberOfGoods: PropTypes.func.isRequired,
  addNumberOfGoods: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
};

GoodsDetailModal.defaultProps = {
  classes: PropTypes.object.isRequired,
  visible: true,
  images: [],
  name: ' ',
  desc: ' ',
  remain: 1,
  numberOfGoods: 1,
};

export default withStyles(styleSheet)(GoodsDetailModal);

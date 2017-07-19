import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Carousel from '../shared/Carousel/Carousel';

import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import Explore from 'material-ui/svg-icons/action/explore';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import IconAddCircle from 'material-ui/svg-icons/content/add-circle';



class GoodsDetailModal extends Component {

  render() {

    const { visible, images, name, desc, remain, numberOfGoods } = this.props;
    const { reduceNumberOfGoods, setNumber, addNumberOfGoods, hideModal, addToShoppingCart, buyNow } = this.props;
    const style = {
      width: '90%',
      maxWidth: 'none',
    };

    return (
      <div>
        <Dialog
          open={visible}
          autoScrollBodyContent={true}
          contentStyle={style}
        >
          <Carousel images={images} />
          <h2>{name}</h2>
          <p>{desc}</p>
          <div>
            <IconButton
              tooltip="reduce"
              onTouchTap={reduceNumberOfGoods}
            >
              <IconRemoveCircle />
            </IconButton>
            <TextField
              name="numberOfGoods"
              value={numberOfGoods}
              onChange={setNumber}
              style={{width: '3em'}}
            />
            <IconButton
              tooltip="add"
              onTouchTap={addNumberOfGoods}
            >
              <IconAddCircle />
            </IconButton>
          </div>
          <span>剩余数量： {remain}</span>
          <div>
            <RaisedButton
              label="看看别的"
              icon={<Explore />}
              onTouchTap={hideModal}
            />
            <RaisedButton
              label="加入购物车"
              secondary={true}
              icon={<AddShoppingCart />}
              onTouchTap={addToShoppingCart}
            />
            <RaisedButton
              label="立即购买"
              primary={true}
              icon={<CreditCard />}
              onTouchTap={buyNow}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default GoodsDetailModal;
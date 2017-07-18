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

    const { images, name, desc, remain } = this.props.goodsDetail;

    return (
      <div>
        <Dialog
          open={this.props.open}
        >
          <Carousel images={images} />
          <h2>{name}</h2>
          <p>{desc}</p>
          <div>
            <IconButton
              tooltip="reduce"
              onTouchTap={this.props.reduceNumber}
            >
              <IconRemoveCircle />
            </IconButton>
            <TextField
              value={this.props.number}
              onChange={this.props.setNumber}
            />
            <IconButton
              tooltip="add"
              onTouchTap={this.props.addNumber}
            >
              <IconAddCircle />
            </IconButton>
          </div>
          <span>剩余数量： {remain}</span>
          <div>
            <RaisedButton
              label="看看别的"
              icon={<Explore />}
              onTouchTap={this.this.props.closeModal}
            />
            <RaisedButton
              label="加入购物车"
              secondary={true}
              icon={<AddShoppingCart />}
              onTouchTap={this.props.addToShoppingCart}
            />
            <RaisedButton
              label="立即购买"
              primary={true}
              icon={<CreditCard />}
              onTouchTap={this.props.buyNow}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default GoodsDetailModal;
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

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';


class GoodsDetailModal extends Component {

  render() {

    const { visible, images, name, desc, remain, numberOfGoods } = this.props;
    const { reduceNumberOfGoods, setNumber, addNumberOfGoods, hideModal, addToShoppingCart, buyNow } = this.props;

    const actions = [
      <BottomNavigation>
        <BottomNavigationItem
          label="看看别的"
          icon={<Explore />}
          onTouchTap={hideModal}
        />
        <BottomNavigationItem
          label="加入购物车"
          icon={<AddShoppingCart />}
          onTouchTap={addToShoppingCart}
        />
        <BottomNavigationItem
          label="立即购买"
          icon={<CreditCard />}
          onTouchTap={buyNow}
        />
      </BottomNavigation>
    ];

    return (
      <div>
        <Dialog
          title="商品详情"
          actions={actions}
          open={visible}
          modal={true}
          autoScrollBodyContent={true}
        >
          <div style={{width: "calc(75vw - 48px)", height: "calc((75vw - 48px)*0.75)"}}>
            <Carousel images={images} />
          </div>
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
        </Dialog>
      </div>
    );
  }
}

export default GoodsDetailModal;
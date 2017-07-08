import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Carousel from '../shared/Carousel/Carousel';
import NumberControl from './NumberControl';

import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import Explore from 'material-ui/svg-icons/action/explore';


class GoodsDetailModal extends Component {
  constructor(props) {
    super(props);

    let currProps = this.props;
    let open = false;
    if ( open in currProps ) {
      open = currProps.open;
    } else {
      open = false;
    }

    this.state = {
      open,
    }
  }



  handleOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {

    const { images, name, desc, remain } = this.props.goodsDetail;

    return (
      <div>
        <Dialog
          open={this.state.open}
        >
          <Carousel images={images} />
          <h2>{name}</h2>
          <p>{desc}</p>
          <NumberControl number={remain} />
          <div>
            <RaisedButton
              label="看看别的"
              icon={<Explore />}
              onTouchTap={this.handleClose()}
            />
            <RaisedButton
              label="加入购物车"
              secondary={true}
              icon={<AddShoppingCart />}
              onTouchTap={this.handleClose()}
            />
            <RaisedButton
              label="立即购买"
              primary={true}
              icon={<CreditCard />}
              onTouchTap={this.handleClose()}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default GoodsDetailModal;
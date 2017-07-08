import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import './GoodsCard.css';

class GoodsCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

  }

  render() {
    const { name, desc, cover, price} = this.props.goods;
    return (
      <Card>
        <div className="goods-card-container">
          <div className="goods-card-left">
            <CardMedia>
              <img src={`mock/image/${cover}`} alt="" />
            </CardMedia>
          </div>
          <div className="goods-card-right">
            <CardTitle title={name} subtitle={`价格：${price}元`} />
            <CardText>
              {desc}
            </CardText>
            <CardActions>
              <FlatButton
                label="加入购物车"
                primary={true}
                icon={<AddShoppingCart />} />
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }
}

export default GoodsCard;

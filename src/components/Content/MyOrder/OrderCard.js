import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Clear from 'material-ui/svg-icons/content/clear'
import './OrderCard.css';

class OrderCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

  }

  render() {
    const { name, desc, cover, price, finished} = this.props.order;

    return (
      <Card>
        <div className="order-card-container">
          <div className="order-card-left">
            <CardMedia
              overlay={<CardTitle title={finished ? '已完成' : '待取货'} />}
            >
              <img src={`mock/image/${cover}`} alt="" />
            </CardMedia>
          </div>
          <div className="order-card-right">
            <CardTitle title={name} subtitle={`价格：${price}元`} />
            <CardText>
              {desc}
            </CardText>
            <CardActions>
              { finished ?
                '' :
                <FlatButton
                  label='取消订单'
                  icon={<Clear/>}
                  secondary={true}
                />
              }
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }
}

export default OrderCard;

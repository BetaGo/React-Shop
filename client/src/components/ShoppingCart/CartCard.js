import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import QuantityWrapper from '../shared/QuantityWrapper/QuantityWrapper';

const styleSheet = createStyleSheet('CartCard', {
  card: {
    display: 'flex',
    maxHeight: 180,
    margin: 6,
  },
  checkboxWrapper: {
    width: 48,
  },
  checkbox: {
    margin: 'auto',
  },
  contentContainer: {
    display: 'flex',
  },
  cover: {
    width: '40%',
    display: 'flex',
    background: 'rgba(0,0,0,0.2)',
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
  cardTitle: {
    height: 48,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
    const classes = this.props.classes;
    // TODO:
    const { quantity } = this.state;
    const { name, price, cover } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.checkbox}>
            <Checkbox />
          </div>
          <div className={classes.contentContainer}>
            <div className={classes.cover}>
              <img className={classes.img} src={cover} alt={name} />
            </div>
            <div className={classes.detail}>
              <CardContent>
                <Typography className={classes.cardTitle} type="subheading" color="secondary">
                  {name}
                </Typography>
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
                  <Button
                    color="accent"
                  >
                    删除
                  </Button>
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
};

export default withStyles(styleSheet)(CartCard);

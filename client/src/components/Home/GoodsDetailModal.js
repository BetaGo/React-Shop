import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Slide from 'material-ui/transitions/Slide';

import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import ExploreIcon from 'material-ui-icons/Explore';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';
import AddCircleIcon from 'material-ui-icons/AddCircle';

import Carousel from '../shared/Carousel/Carousel';

const styleSheet = createStyleSheet('GoodsDetailModal', {
  carousel: {
    width: '100vw',
    height: 'calc(100vw * 0.75)',
  },
  content: {
    padding: '2em',
  },
});

class GoodsDetailModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselWidth: 0,
    };
  }

  static carouselContainerElement = null;

  componentDidMount() {
    console.log('did mount');
    console.log(this.carouselContainerElement);
    // if (this.carouselContainerElement != null) {
    //   const width = this.carouselContainerElement.offsetWidth;
    //   this.setState({
    //     carouselWidth: width,
    //   });
    // }
  }

  render() {
    const classes = this.props.classes;
    const { visible, images, name, desc, remain, numberOfGoods } = this.props;
    const {
      reduceNumberOfGoods,
      setNumber,
      addNumberOfGoods,
      hideModal,
      addToShoppingCart,
      buyNow,
      } = this.props;

    return (
      <div>
        <Dialog
          fullScreen
          open={visible}
          transition={<Slide direction="up" />}
        >
          <div
            className={classes.carousel}
            ref={(ref) => { this.carouselContainerElement = ref; }}
          >
            <Carousel
              images={images}
              width={this.state.carouselWidth}
              height={this.state.carouselWidth * 0.75}
            />
          </div>
          <div className={classes.content}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <div>
              <IconButton
                tooltip="reduce"
                onTouchTap={reduceNumberOfGoods}
              >
                <RemoveCircleIcon />
              </IconButton>
              <TextField
                name="numberOfGoods"
                value={numberOfGoods}
                onChange={setNumber}
                style={{ width: '3em' }}
              />
              <IconButton
                tooltip="add"
                onTouchTap={addNumberOfGoods}
              >
                <AddCircleIcon />
              </IconButton>
            </div>
            <span>剩余数量： {remain}</span>
            <div>
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
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

GoodsDetailModal.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  remain: PropTypes.number.isRequired,
  numberOfGoods: PropTypes.number.isRequired,

  reduceNumberOfGoods: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  addNumberOfGoods: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(GoodsDetailModal);

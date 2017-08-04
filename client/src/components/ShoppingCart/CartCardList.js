import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import CartCard from './CartCard';
import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('CartCardList', {
  root: {
    margin: '60px 0',
  },
});

class CartCardList extends Component {

  componentDidMount() {
    this.props.loadCartsList();
  }

  render() {
    if (this.props.loading) {
      return <LoadingCircle />;
    }

    if (this.props.error) {
      return (
        <div>
          出了点差错
        </div>
      );
    }

    const { classes, goods } = this.props;
    return (
      <div className={classes.root}>
        {
          goods.map(commodity => (
            <CartCard key={`cart-card-${commodity.commodity_id}`} {...commodity} />
          ))
        }
      </div>
    );
  }
}

CartCardList.propTypes = {
  classes: PropTypes.object.isRequired,
  goods: PropTypes.array.isRequired,
  loadCartsList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default withStyles(styleSheet)(CartCardList);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import CartCard from './CartCard';
import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('CartCardList', {
  root: {
    margin: '60px 0',
  },
});

function CartCardList(props) {
  if (props.loading) {
    return <LoadingCircle />;
  }

  if (props.error) {
    return (
      <div>
        出了点差错
      </div>
    );
  }

  const { classes, goods } = props;
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

CartCardList.propTypes = {
  classes: PropTypes.object.isRequired,
  goods: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default withStyles(styleSheet)(CartCardList);

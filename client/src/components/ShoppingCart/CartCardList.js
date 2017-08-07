import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import CartCard from './CartCard';
import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('CartCardList', {
  root: {
    margin: '72px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

function CartCardList(props) {
  const { classes, goods } = props;
  if (props.loading) {
    return <LoadingCircle />;
  }

  if (props.error) {
    return (
      <div className={classes.root}>
        出了点差错
      </div>
    );
  }

  if (props.goods.length === 0) {
    return (
      <div className={classes.root}>
        购物车里面什么都没有。。
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {
        goods.map(commodity => (
          <CartCard
            {...commodity}
            key={`cart-card-${commodity.commodity_id}`}
            deleteCommodityWithNotice={props.deleteCommodityWithNotice}
          />
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
  deleteCommodityWithNotice: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(CartCardList);

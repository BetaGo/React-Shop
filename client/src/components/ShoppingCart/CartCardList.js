import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import CartCard from './CartCard';
import CartActionBar from './CartActionBar';
import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('CartCardList', theme => ({
  root: {
    margin: '56px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      margin: '48px 0',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '64px 0',
    },
  },
}));

function CartCardList(props) {
  const { classes, goods } = props;
  const { openBottomNav, openAppBar } = props;
  openAppBar();
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
    openBottomNav();
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
      <CartActionBar total={10240} />
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

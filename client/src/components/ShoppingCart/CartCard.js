import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import QuantityWrapper from '../shared/QuantityWrapper/QuantityWrapper';

const styleSheet = createStyleSheet('CartCard', {
  card: {
    display: 'flex',
  },
  checkbox: {
    width: 48,
  },
  cover: {
    width: '45%',
    display: 'flex',
  },
  img: {
    width: '100%',
    margin: 'auto',
  },
  detail: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
  },
  action: {
    display: 'flex',
  },
});

function CartCard(props) {
  const classes = props.classes;
  // TODO:
  const { name, price, quantity, cover } = props;

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.checkbox}>
          <Checkbox />
        </div>
        <div className={classes.cover}>
          <img className={classes.img} src={cover} alt={name} />
        </div>
        <div className={classes.detail}>
          <CardContent>
            <Typography type="subheading" color="secondary">
              {name}
            </Typography>
          </CardContent>
          <div className={classes.actions}>
            <span>￥{price}</span>
            <QuantityWrapper
              quantity={quantity}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

CartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CartCard);

import React from 'react';
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

  }
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

CartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CartCard);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('MyOrder', theme => ({
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
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  image: {
    width: '100%',
  },
}));

function MyOrder(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia>
          <img className={classes.image} src="http://placeimg.com/640/480/animals" alt="Contemplative Reptile" />
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            本功能暂时不能使用。
          </Typography>
          <Typography component="p">
            本项目只是业余学习练手用哒，所以没有订单和支付相关的东西啦～^_^
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

MyOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MyOrder);

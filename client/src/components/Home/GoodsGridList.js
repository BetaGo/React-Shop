import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import AddShoppingCart from 'material-ui-icons/AddShoppingCart';

import LoadingCircle from '../shared/LoadingCircle/LoadingCircle';

const styleSheet = createStyleSheet('GoodsGridList', {
  root: {
    margin: '60px 0',
  },
  card: {
    display: 'flex',
    margin: 6,
    justifyContent: 'space-around',
    maxHeight: 180,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    width: '45%',
    background: 'rgba(0,0,0,0.2)',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  responseImage: {
    width: '100%',
    maxHeight: 180,
    margin: 'auto',
  },
});

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: '100%',
//   },
// };

class GoodsGridList extends Component {

  componentDidMount() {
    this.props.loadGoodsList();
  }


  render() {
    const classes = this.props.classes;
    if (this.props.loading) {
      return <LoadingCircle />;
    }

    if (this.props.error) {
      return (
        <div onTouchTap={this.props.loadGoodsList}>
          出错了。点击重试。
        </div>
      );
    }

    const goodsList = this.props.goodsList;
    const { showGoodsDetail } = this.props;

    return (
      <div className={classes.root}>
        {
          goodsList.map((goods, index) => (
            <Card
              className={classes.card}
              key={goods.commodity_id}
              onTouchTap={() => showGoodsDetail(index)}
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography type="headline">{goods.name}</Typography>
                  <Typography type="subheading" color="secondary">
                    {<span>￥<b>{goods.price}</b></span>}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton
                    aria-label="addToShoppingCart"
                    onTouchTap={this.props.addToShoppingCart}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </div>
              </div>
              <div className={classes.cover}>
                <img className={classes.responseImage} src={goods.cover} alt={goods.name} />
              </div>
            </Card>
          ))
        }
      </div>
    );
  }
}

GoodsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  goodsList: PropTypes.array.isRequired,
  loadGoodsList: PropTypes.func.isRequired,
  showGoodsDetail: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

GoodsGridList.defaultProps = {
  loading: true,
  error: false,
};

export default withStyles(styleSheet)(GoodsGridList);

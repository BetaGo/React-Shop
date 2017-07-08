import React, { Component } from 'react';
import {GridList} from 'material-ui/GridList';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}

class GoodsGridList extends Component {

  render() {

    const { name, cover, price} = this.props.goods;

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          title={name}
          subtitle={<span>￥<b>{price}</b></span>}
          actionIcon={<AddShoppingCart />}
        >
          <img src={cover} alt="" />
        </GridList>
      </div>
    );
  }
}

export default GoodsGridList;
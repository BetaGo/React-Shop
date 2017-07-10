import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%'
  },
}

class GoodsGridList extends Component {

  render() {

    const goodsList = this.props.goodsList;

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
        {goodsList.map((goods) => (
          <GridTile
            key={goods._id}
            title={goods.name}
            subtitle={<span>￥<b>{goods.price}</b></span>}
            actionIcon={<AddShoppingCart onTouchTap={this.props.addToShoppingCart} ></AddShoppingCart>}
            onTouchTap={this.props.showGoodsDetail}
          >
            <img src={goods.cover} alt={goods.name}/>
          </GridTile>
        ))}
        </GridList>
      </div>
    );
  }
}

export default GoodsGridList;
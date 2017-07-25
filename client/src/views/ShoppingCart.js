import React from 'react';
import CartCard from '../components/ShoppingCart/CartCard';

import shoppingCartList from '../api/shoppingCartList.json';

function ShoppingCart(props) {
  const list = shoppingCartList;

  console.log(`List: ${list}`);

  return (
    <div>
      {
        list.map(value => (
          <CartCard {...value} />
        ))
      }
    </div>
  );
}

export default ShoppingCart;
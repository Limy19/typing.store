import React from 'react';
import { CartItem as CartItemType } from '../type/cartType';
import CartItem from './CartItem';

type CartItemsListProps = {
  cartItems: CartItemType[];
};

function CartItemsList({ cartItems }: CartItemsListProps): JSX.Element {
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

export default CartItemsList;

import React from 'react';
import { CartItem as CartItemType } from '../type/cartType';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

type CartItemsListProps = {
  cartItems: CartItemType[];
};

function CartItemsList({ cartItems }: CartItemsListProps): JSX.Element {
  console.log(cartItems);
  const navigate = useNavigate();

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <button type="button" onClick={() => navigate('/lk')}>
        купить
      </button>
    </div>
  );
}

export default CartItemsList;

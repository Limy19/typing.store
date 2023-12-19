import React from 'react';
import { CartItem as CartItemType } from '../type/cartType';
import { useAppDispatch } from '../../../store/store';
import { remove } from '../cartSlice';

type CartItemProps = {
  cartItem: CartItemType;
};

function CartItem({ cartItem }: CartItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(remove(cartItem.id));
  };
  return (
    <div>
      <h5>{cartItem.Product?.name}</h5>
      <p>Количество:{cartItem.count}</p>
      <p>Цена:{cartItem.Product?.price}</p>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
}

export default CartItem;

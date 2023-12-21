import React from 'react';
import type { CartItem as CartItemType } from '../type/cartType';
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
    <>
      <div className="cartItem">
        <div className="cartNameAndCount">
          <h1>
            {cartItem.Product?.name} x{cartItem.count}
          </h1>
        </div>
        <div className="priceAndDelete">
          <h1>Цена:{cartItem.Product?.price}$</h1>

          <button className="NODecorationButtonCart" type="button" onClick={handleDelete}>
           X
          </button>
        </div>
      </div>
      <div className="black-line" />
    </>
  );
}

export default CartItem;

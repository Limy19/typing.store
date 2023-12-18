import React from 'react';
import { CartCard } from '../type/cartCardtype';
import { useAppDispatch } from '../../../store/store';

type cartCardProps = {
  cartCard: CartCard;
};

function CartCardComponents({ cartCard }: cartCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Товары:</p>
      {cartCard.CartItems?.map((cartitem) => cartitem.Product.name)}
      {cartCard.CartItems?.map((cartitem) => cartitem.Product.price)}
      {/* <p>Цена:{cartCard.Product.price}</p> */}
      {/* <p>{cartCard.Product.PhotoProducts}</p> */}
    </div>
  );
}

export default CartCardComponents;

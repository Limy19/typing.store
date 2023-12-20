import React from 'react';
import type{ CartCard } from '../type/cartCardtype';

type cartCardProps = {
  cartCard: CartCard;
};

function CartCardComponents({ cartCard }: cartCardProps): JSX.Element {
  return (
    <div>
      <p>Ваш заказ:</p>
      {cartCard.CartItems?.map((cartitem) => cartitem.Product.name)}
      {cartCard.CartItems?.map((cartitem) => cartitem.Product.price)}
      {/* <p>Цена:{cartCard.Product.price}</p> */}
      {/* <p>{cartCard.Product.PhotoProducts}</p> */}
    </div>
  );
}

export default CartCardComponents;

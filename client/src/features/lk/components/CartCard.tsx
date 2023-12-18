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
      <h5>{cartCard.status}</h5>
      <p>Товар:{cartCard.Product.name}</p>
      <p>Цена:{cartCard.Product.price}</p>
      <p>{cartCard.Product.PhotoProducts}</p>
    </div>
  );
}

export default CartCardComponents;

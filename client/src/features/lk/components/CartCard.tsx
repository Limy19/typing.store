import React from 'react';
import type { CartCard } from '../type/cartCardtype';

type cartCardProps = {
  cartCard: CartCard;
};

function CartCardComponents({ cartCard }: cartCardProps): JSX.Element {
  return (
    <div className="cartCardDiv">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Ваш заказ:</h1>
        <p>
          Наименование: {cartCard.CartItems?.reduce((acc, el) => `${el.Product.name}, ${acc}`, '')}
        </p>
        <p> Цена: {cartCard.CartItems?.reduce((acc, el) => el.Product.price + acc, 0)} $</p>
        <p>
          {cartCard.CartItems?.map((cartitem) => (
            <img key={cartitem.id} src={cartitem.Product?.PhotoProducts?.[0].img} />
          ))}
        </p>
        {/* <p>Цена:{cartCard.Product.price}</p> */}
        {/* <p>{cartCard.Product.PhotoProducts}</p> */}
      </div>
    </div>
  );
}

export default CartCardComponents;

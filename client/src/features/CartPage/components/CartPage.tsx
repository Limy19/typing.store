import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { load, order } from '../cartSlice';
import CartItemsList from './CartItemsList';

function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChange = async (): Promise<void> => {
    await dispatch(order());
    navigate('/lk');
  };
  const cartItems = useSelector((store: RootState) => store.cart.cartItems);
  const sum = cartItems.reduce((acc, item) => acc + item.Product?.price * item.count, 0);
  console.log(cartItems);

  useEffect(() => {
    void dispatch(load());
  }, []);
  return (
    <div>
      {cartItems.length > 0 && (
        <>
          <CartItemsList cartItems={cartItems} />
          <button type="button" onClick={handleChange}>
            Сумма заказа: {sum}
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;

import React, { useEffect } from 'react';
import { CartItem as CartItemType } from '../type/cartType';
import CartItem from './CartItem';
import store, { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { load, order } from '../cartSlice';
import CartItemsList from './CartItemsList';
import { useNavigate } from 'react-router-dom';

function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChange = async (): Promise<void> => {
    await dispatch(order());
    navigate('/lk');
  };
  const cartItems = useSelector((store: RootState) => store.cart.cartItems);
  const sum = cartItems.reduce((acc, item) => {
    return acc + item.Product.price * item.count;
  }, 0);
  console.log(sum);

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

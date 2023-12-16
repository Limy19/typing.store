import React, { useEffect } from 'react';
import { CartItem as CartItemType } from '../type/cartType';
import CartItem from './CartItem';
import store, { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { load } from '../cartSlice';
import CartItemsList from './CartItemsList';

function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((store: RootState) => store.cart.cartItems);
  useEffect(() => {
    void dispatch(load());
  }, []);
  return <CartItemsList cartItems={cartItems} />;
}

export default CartPage;

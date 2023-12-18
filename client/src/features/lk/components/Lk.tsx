import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import store, { RootState, useAppDispatch } from '../../../store/store';
import { load } from '../cardSlice';
// import CartItemsList from './CartItemsList';

function LkPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartCards = useSelector((store: RootState) => store.card.cartCard);
  console.log(cartCards);

  useEffect(() => {
    void dispatch(load());
  }, []);
  return (
    <div>
      {cartCards.map((cartCard) => (
        <CartCard key={cartCard.id} cartCard={cartCard} />
      ))}
    </div>
  );
}

export default LkPage;
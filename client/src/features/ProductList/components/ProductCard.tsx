import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import type { Product } from '../type/productType';
import { deleteProduct } from '../productSlice';
import UppDateCard from './UppDateCard';
import { add } from '../../CartPage/cartSlice';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const [state, setState] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const buy = (): void => {
    void dispatch(add(product.id));
  };
  const del = (): void => {
    void dispatch(deleteProduct(product.id));
  };
  return (
    <div>
      {state ? (
        <UppDateCard product={product} setState={setState} />
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}$</p>
          <p>{product.stock}шт </p>
          {user?.isAdmin ? (
            <>
              <button type="button" onClick={del}>
                удалить
              </button>
              <button type="button">изменить</button>
            </>
          ) : (
            <button type="button" onClick={buy}>
              купить
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default ProductCard;

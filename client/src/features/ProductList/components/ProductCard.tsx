import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../../store/store';
import type { Product } from '../type/productType';

import { add } from '../../CartPage/cartSlice';
import { initProduct } from '../productSlice';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const buy = (): void => {
    void dispatch(add(product.id));
  };
  console.log(product.PhotoProducts);

  return (
    <div className="productCard">
      <Link className="NoTextDecoration" to={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <img src={`${product.PhotoProducts[0].img}`} alt="" />
      <p>{product.description}</p>
      <p>{product.price}$ </p>
      <p>{product.stock}шт </p>
      {!user?.isAdmin && (
        <button type="button" onClick={buy}>
          купить
        </button>
      )}
    </div>
  );
}

export default ProductCard;

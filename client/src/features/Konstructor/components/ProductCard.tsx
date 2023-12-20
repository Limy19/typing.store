import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../../store/store';
import type { Product } from '../type/productType';

import { add } from '../../CartPage/cartSlice';
import { initProduct } from '../productSlice';

function ProductCard({
  product,
  onClick,
  active,
}: {
  product: Product;
  onClick?: () => void;
  active?: boolean;
}): JSX.Element {
  return (
    <div
      onClick={onClick}
      className="productCard"
      style={{ border: active ? '1px solid #0F0' : 'none', height: 'auto', marginBottom: 12 }}
    >
      <h2>{product.name}</h2>
      <img src={`${product.PhotoProducts?.[0]?.img}`} alt="" />
      <p>{product.description}</p>
      <p>{product.price}$ </p>
      <p>{product.stock}шт </p>
    </div>
  );
}

export default ProductCard;

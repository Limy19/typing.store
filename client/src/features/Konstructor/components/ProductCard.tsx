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
      className="productCardKonstructor"
      style={{ border: active ? '5px solid #0ff' : 'none', height: 'auto', marginBottom: 12 }}
    >
      <h2>{product.name}</h2>
      <img
        className="imgKonstructor"
        src={`${product.PhotoProducts?.[0]?.img}`}
        alt=""
        style={{ width: '85%' }}
      />
      <div className="product-info">
        <p>{product.description}</p>
        <p>{product.price}$ </p>
        <p className="pProductCard">Qty x{product.stock} </p>
      </div>
    </div>
  );
}

export default ProductCard;

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
    // <div className="product-card">
    //   <div className="product-image">
    //     <Link className="NoTextDecoration" to={`/product/${product.id}`}>
    //       <img src={`${product.PhotoProducts[0].img}`} alt="Product Image" />
    //     </Link>
    //   </div>
    //   <div className="product-details">
    //     <div className="product-info">
    //       <h2>{product.name}</h2>
    //       <p>{product.description}</p>
    //       <p>{product.stock}шт </p>
    //     </div>
    //     <div className="product-price">
    //       <p>{product.price}$ </p>
    //       {!user?.isAdmin && (
    //         <button type="button" onClick={buy}>
    //           купить
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>.

    <div className="product-card">
      <div className="product-image">
        <Link className="NoTextDecoration" to={`/product/${product.id}`}>
          <img src={`${product.PhotoProducts[0].img}`} alt="Product Image" />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2 className='h2productCard'>{product.name}</h2>
          <p className='pProductCard'>{product.description}</p>
        </div>
        <div className="product-price">
          <h2 className='h2productCard'>{product.price}$ </h2>
          <p className='pProductCard'>{product.stock}шт </p>
          {!user?.isAdmin && (
            <button type="button" onClick={buy}>
              купить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

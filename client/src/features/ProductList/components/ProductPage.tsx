import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import UppDateCard from './UppDateCard';
import { deleteProduct, initProductOne } from '../productSlice';

import type { RootState } from '../../../store/store';
import { add } from '../../CartPage/cartSlice';

function ProductPage(): JSX.Element {
  const { productId } = useParams();

  const [state, setState] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const product = useSelector((store: RootState) => store.product.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initProductOne(productId));
  }, []);

  const del = (): void => {
    void dispatch(deleteProduct(productId));
    navigate(-1);
  };
  const buy = (): void => {
    void dispatch(add(product.id));
  };

  return (
    <div>
      <div>
        {product?.PhotoProducts.map((photo) => <img alt="pupupu" src={photo.img} key={photo.id} />)}
      </div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>{product?.price}$</p>
      <p>{product?.stock}шт </p>
      <button type="button" onClick={() => navigate(-1)}>
        {'<--'}
      </button>
      {user?.isAdmin ? (
        <>
          {state && <UppDateCard product={product} setState={setState} />}
          <button type="button" onClick={() => del()}>
            удалить
          </button>
          <button type="button" onClick={() => setState(true)}>
            изменить
          </button>
        </>
      ) : (
        <button type="button" onClick={buy}>
          купить
        </button>
      )}
    </div>
  );
}

export default ProductPage;

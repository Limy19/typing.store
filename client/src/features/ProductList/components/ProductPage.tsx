import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { deleteProduct, initProductOne } from '../productSlice';
import type { RootState } from '../../../store/store';
import { add } from '../../CartPage/cartSlice';
import UppDateCard from './UppDateCard';

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
    <div className="about">
      <div
        className="img"
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '25px',
        }}
      >
        <Carousel>
          {product?.PhotoProducts.map((photo) => (
            <img
              style={{
                width: '100%',
                height: '100%',
                position: 'static',
                marginBottom: '10px',
                objectFit: 'cover',
              }}
              alt="pupupu"
              src={photo.img}
              key={photo.id}
            />
          ))}
        </Carousel>
      </div>
      <div className="textabout" style={{ width: '50%' }}>
        <h1
          style={{
            color: '#121214',
            fontSize: '62px',
            marginBottom: '-75px',
            fontFamily: 'IBM Plex Mono',
          }}
        >
          {product?.name}
        </h1>
        <h1 style={{ color: '#ffa800', fontSize: '62px', fontFamily: 'IBM Plex Mono' }}>
          {product?.price}$
        </h1>
        <div className="black-line" />
        <p style={{ color: '#121214', fontSize: '18px', fontFamily: 'IBM Plex Mono' }}>
          {product?.description}
        </p>
        <div className="black-line" />
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
    </div>
  );
}

export default ProductPage;
// {
//    <div>
//   <div>
//     {product?.PhotoProducts.map((photo) => <img alt="pupupu" src={photo.img} key={photo.id} />)}
//   </div>
//   <h2>{product?.name}</h2>
//   <p>{product?.description}</p>
//   <p>{product?.price}$</p>
//   <p>{product?.stock}шт </p>
//   <button type="button" onClick={() => navigate(-1)}>
//     {'<--'}
//   </button>
//   {user?.isAdmin ? (
//     <>
//       {state && <UppDateCard product={product} setState={setState} />}
//       <button type="button" onClick={() => del()}>
//         удалить
//       </button>
//       <button type="button" onClick={() => setState(true)}>
//         изменить
//       </button>
//     </>
//   ) : (
//     <button type="button" onClick={buy}>
//       купить
//     </button>
//   )}
// </div>;
// }

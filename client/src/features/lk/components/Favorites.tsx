import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import ProductCard from '../../ProductList/components/ProductCard';

function Favorites(): JSX.Element {
  const favorites = useSelector((store: RootState) => store.favorites.favorites);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Избранное:</h1>
      </div>
      <div>
        <div className="favorites">
          {favorites.map((like) => (
            <ProductCard product={like.Product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;

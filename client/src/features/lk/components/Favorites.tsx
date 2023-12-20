import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import ProductCard from '../../ProductList/components/ProductCard';

function Favorites(): JSX.Element {
  const favorites = useSelector((store: RootState) => store.favorites.favorites);

  return (
    <div>
      Избранное:
      {favorites.map((like) => (
        <ProductCard product={like.Product} />
      ))}
    </div>
  );
}

export default Favorites;

import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../../store/store';
import type { IdProduct, Product } from '../type/productType';
import { add } from '../../CartPage/cartSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorites } from '../favoritesSlice';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const buy = (): void => {
    void dispatch(add(product.id));
  };

  const favorites = useSelector((store: RootState) => store.favorites.favorites);
  const isFavorite = favorites.find((v) => v.id === product.id);
  console.log(favorites, '**********');
  useEffect(() => {}, []);
  // const handleRemoveFromFavorites = () => {};
  const handleAddToFavorites = (id: IdProduct): Promise<void> => {
    dispatch(addFavorites(id));
  };

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
      {isFavorite ? (
        <FavoriteIcon onClick={() => handleRemoveFromFavorites(product.id)} />
      ) : (
        <FavoriteBorderIcon onClick={() => handleAddToFavorites(product.id)} />
      )}
    </div>
  );
}

export default ProductCard;

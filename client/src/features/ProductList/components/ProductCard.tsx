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
    <div className="product-card">
      <div className="product-image">
        <Link className="NoTextDecoration" to={`/product/${product.id}`}>
          <img src={`${product.PhotoProducts[0].img}`} alt="Product Image" />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h2 className="h2productCard">{product.name}</h2>
          <p className="pProductCard">{product.description}</p>
          {isFavorite ? (
            <FavoriteIcon onClick={() => handleRemoveFromFavorites(product.id)} />
          ) : (
            <FavoriteBorderIcon onClick={() => handleAddToFavorites(product.id)} />
          )}
        </div>
        <div className="product-price">
          <h2 className="h2productCard">{product.price}$ </h2>
          <p className="pProductCard">Qty x{product.stock} </p>
          {!user?.isAdmin && (
            <button className ='DecorationButtonByu'type="button" onClick={buy}>
              BUY
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

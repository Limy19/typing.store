import type { Product } from './productType';

export type State = {
  favorites: Favorite[];
  error: undefined | string;
};
export type Favorite = {
  id: number;
  userId: number;
  productId: number;
  Product: Product;
};

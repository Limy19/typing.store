import { Product } from '../../CategoryList/type/categoryType';

export type State = {
  cartItems: CartItem[];
};

export type CartItem = {
  product: Product;
  count: number;
  id: number;
};

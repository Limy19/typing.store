import type { Product } from '../../ProductList/type/productType';

export type State = {
  cartItems: CartItem[];
};

export type CartItem = {
  Product: Product;
  count: number;
  id: number;
  status: 'new' | 'ordered' | 'delivered';
};

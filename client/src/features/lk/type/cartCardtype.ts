import type { Product } from '../../ProductList/type/productType';

export type State = {
  cartCard: CartCard[];
};

export type CartCard = {
  Product: Product;
  status: 'new' | 'ordered' | 'delivered';
  id: number;
};

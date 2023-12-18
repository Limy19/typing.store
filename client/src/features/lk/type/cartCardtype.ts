import { CartItem } from '../../CartPage/type/cartType';
import type { Product } from '../../ProductList/type/productType';

export type State = {
  cartCard: CartCard[];
};

export type CartCard = {
  CartItems: CartItem[];
  status: 'new' | 'ordered' | 'delivered';
  id: number;
};

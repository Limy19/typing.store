import type { Product } from '../../ProductList/type/productType';

export type State = {
  categories: Category[];
  products: Product[];
  error: undefined | string;
};
export type Category = {
  id: number;
  name: string;
  img: string;
};

export type IdCategory = Category['id'];

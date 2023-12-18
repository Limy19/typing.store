import type { Product } from '../ProductList/type/productType';
import type { Category, IdCategory } from './type/categoryType';

export const initCategoryFetch = async (): Promise<Category[]> => {
  const data: Category[] = await (await fetch('/api/category')).json();
  return data;
};



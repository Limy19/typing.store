import type { Category, IdCategory, Product } from './type/categoryType';

export const initCategoryFetch = async (): Promise<Category[]> => {
  const data: Category[] = await (await fetch('/api/category')).json();

  return data;
};

export const initProductFetch = async (id: IdCategory): Promise<Product[]> => {
  const data: Product[] = await (await fetch(`/api/category/${id}`)).json();
  return data;
};

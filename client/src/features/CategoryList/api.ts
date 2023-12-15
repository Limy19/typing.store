import type { Category } from './type/categoryType';

export const initCategoryFetch = async (): Promise<Category[]> => {
  const data: Category[] = await (await fetch('/api/category')).json();

  return data;
};

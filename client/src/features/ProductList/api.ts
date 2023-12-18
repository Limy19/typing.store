import { IdCategory } from '../CategoryList/type/categoryType';
import type { IdProduct, Product, ProductWithoutCategoryId } from './type/productType';

export const initProductFetch = async (id: IdCategory): Promise<Product[]> => {
  const data: Product[] = await (await fetch(`/api/category/${id}`)).json();
  return data;
};

export const deleteProductFetch = async (id: IdProduct): Promise<IdProduct> => {
  const data: { id: IdProduct } = await (
    await fetch(`/api/product/${id}`, { method: 'DELETE' })
  ).json();
  return data.id;
};

export const updateProductFetch = async ({
  id,
  name,
  description,
  stock,
  price,
}: ProductWithoutCategoryId): Promise<Product> => {
  const data: Product = await (
    await fetch(`/api/product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name,
        description,
        stock,
        price,
      }),
    })
  ).json();
  return data;
};

export const addProductFetch = async (obj: FormData): Promise<Product> => {
  const res = await fetch('/api/product', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: Product = await res.json();
  return data;
};

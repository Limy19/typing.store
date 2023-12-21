import { Cart } from './type/cartType';

import type { CartItem } from './type/cartType';

export const addFetch = async (productId: number): Promise<CartItem> => {
  const res = await fetch('/api/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ productId }),
  });
  const { message, cartItem } = await res.json();
  if (!res.ok || !cartItem) {
    throw message;
  }
  return cartItem;
};

export const deleteFetch = async (cartItemId: number): Promise<number> => {
  const res = await fetch(`/api/cart/${cartItemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }

  return cartItemId;
};

export const loadFetch = async (): Promise<CartItem[]> => {
  const res = await fetch('/api/cart/');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: CartItem[] = await res.json();
  return data;
};

export const changeStatusFetch = async (): Promise<Cart> => {
  const res = await fetch('/api/cart/order', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({}),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

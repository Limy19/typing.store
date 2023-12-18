import type { CartCard } from './type/cartCardtype';

export const loadFetch = async (): Promise<CartCard[]> => {
  const res = await fetch('/api/lk/');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data: CartCard[] = await res.json();
  return data;
};

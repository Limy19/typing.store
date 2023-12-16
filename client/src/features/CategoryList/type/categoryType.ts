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
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
};
export type IdCategory = Category['id'];

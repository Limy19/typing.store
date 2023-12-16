export type State = {
  products: Product[];
  error: undefined | string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
};
export type IdProduct = Product['id'];

export type ProductWithoutCategoryId  = Omit <Product , ('categoryId' ) >

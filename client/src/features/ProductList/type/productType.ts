export type State = {
  products: Product[];
  error: undefined | string;
};
export type PhotoProduct = {
  id: number;
  img: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  PhotoProducts: PhotoProduct[];
};
export type IdProduct = Product['id'];

export type ProductWithoutCategoryId = Omit<Product, 'categoryId' | 'photos'>;

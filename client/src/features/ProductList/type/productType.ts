export type State = {
  products: Product[];
  product: undefined | Product;
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
  Category?: { id: number; name: string };
  meta?: { size?: string; color?: string; colorKeycape: string; click: string };
};
export type IdProduct = Product['id'];

export type ProductWithoutCategoryIdandPhotos = Omit<Product, 'categoryId' | 'PhotoProducts'>;

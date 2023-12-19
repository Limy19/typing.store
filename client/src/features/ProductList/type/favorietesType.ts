export type State = {
  favorites: Favorite[];
  error: undefined | string;
};
export type Favorite = {
  id: number;
  userId: number;
  productId: number;
};

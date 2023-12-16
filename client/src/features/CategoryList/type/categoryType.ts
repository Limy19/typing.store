export type State = {
  categories: Category[];
  error: undefined | string;
};
export type Category = {
  id: number;
  name: string;
  img: string;
};

export type IdCategory = Category['id'];

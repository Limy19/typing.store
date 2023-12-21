import type { Product } from '../../ProductList/type/productType';

export type State = {
  case: Product | null;
  switch: Product | null;
  keycap: Product | null;
  caseFilter: Record<string, string>;
  keycapFilter: Record<string, string>;
};

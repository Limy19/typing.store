import React from 'react';
import type { Product } from '../type/categoryType';

function ProductCard({ product }: { product: Product }): JSX.Element {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;

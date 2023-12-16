import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from '../../ProductList/components/ProductCard';
import { initProduct } from '../../ProductList/productSlice';

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();

  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.product.products);

  useEffect(() => {
    void dispatch(initProduct(categoryId));
  }, []);

  return (
    <div className="productAll">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default CategoryPage;

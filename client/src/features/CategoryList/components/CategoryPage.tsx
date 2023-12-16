import React, { useEffect } from 'react';
import store, { RootState, useAppDispatch } from '../../../store/store';
import { initProduct } from '../categorySlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from './ProductCard';

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
 

  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.category.products);

  useEffect(() => {
    void dispatch(initProduct(categoryId));
  }, []);

  return <div className='productAll'>{products.map((product) => <ProductCard product={product} key={product.id}/>)}</div>;
}

export default CategoryPage;

import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from '../../ProductList/components/ProductCard';

import AddProduct from '../../ProductList/components/AddProduct';
import { initProduct } from '../../ProductList/productSlice';

function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.product.products);

  useEffect(() => {
    void dispatch(initProduct(categoryId));
  }, []);

  return (
    <div className="productAll">
      {user?.isAdmin && <AddProduct />}
      <div className="productCardMap">
        {products.map((product) =>
          // console.log(product),

          <ProductCard product={product}  key={product.id} />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;

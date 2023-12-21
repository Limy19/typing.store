import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Category } from '../type/categoryType';
import CategoryCard from './CategoryCard';

function CategoryList(): JSX.Element {
  const categories = useSelector((store: RootState) => store.category.categories);
  const categor = categories.filter((el) => el.id !== 4);
  
  return (
    <div>
      {categor.map((category: Category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryList;

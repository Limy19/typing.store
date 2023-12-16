import React from 'react';
import type { Category } from '../type/categoryType';
import  { Link } from 'react-router-dom';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <div className='categoryCard'>
      <img src={category.img} alt="pupupu" />

      <h2>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
      </h2>
    </div>
  );
}

export default CategoryCard;

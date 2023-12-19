import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../type/categoryType';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <section className="mainPageFirstBanner">
      <div className="top-string">
        <h1>
          {category.name}
          {category.name}
          {category.name}
          {category.name}
          {category.name}
        </h1>
      </div>
      <img className="bannerMainPage" src={category.img} alt="" />
      <div className="center-string">
        <h2>
          <Link className="cardTextCategory" to={`/category/${category.id}`}>
            {category.name}
          </Link>
        </h2>
      </div>
    </section>
  );
}

export default CategoryCard;

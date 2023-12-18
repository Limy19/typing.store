import React from 'react';
import type { Category } from '../type/categoryType';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

function CategoryCard({ category }: { category: Category }): JSX.Element {
  return (
    <Grid item xs={8} md={4}>
      <img src={category.img} alt="pupupu" />

      <h2>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
      </h2>
    </Grid>
  );
}

export default CategoryCard;

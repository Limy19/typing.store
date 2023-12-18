import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Category } from '../type/categoryType';
import CategoryCard from './CategoryCard';
import { Grid } from '@mui/material';

function CategoryList(): JSX.Element {
  const categories = useSelector((store: RootState) => store.category.categories);
 

  return (
   <Grid container>
      {categories.map((category: Category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </Grid>
  );
}

export default CategoryList;

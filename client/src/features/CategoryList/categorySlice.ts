import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { IdCategory, State } from './type/categoryType';

const initialState: State = {
  categories: [],
  products: [],
  error: undefined,
};

export const initCategory = createAsyncThunk('category/init', () => api.initCategoryFetch());
export const initProduct = createAsyncThunk('product/init', (id: IdCategory) =>
  api.initProductFetch(id),
);

const categorySlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(initCategory.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(initProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

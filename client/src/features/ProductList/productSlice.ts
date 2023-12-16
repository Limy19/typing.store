import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { IdProduct, ProductWithoutCategoryId, State } from './type/productType';
import { IdCategory } from '../CategoryList/type/categoryType';

const initialState: State = {
  products: [],
  error: undefined,
};

export const initProduct = createAsyncThunk('product/init', (id: IdCategory) =>
  api.initProductFetch(id),
);
export const deleteProduct = createAsyncThunk('product/delete', (id: IdProduct) =>
  api.deleteProductFetch(id),
);
export const updateProduct = createAsyncThunk('product/update', (obj: ProductWithoutCategoryId) =>
  api.updateProductFetch(obj),
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(initProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

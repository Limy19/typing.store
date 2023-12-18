import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { IdProduct, ProductWithoutCategoryIdandPhotos, State } from './type/productType';

const initialState: State = {
  product: undefined,
  products: [],
  error: undefined,
};
export const initProductOne = createAsyncThunk('productOne/init', (id: string | undefined) =>
  api.initProductOneFetch(id),
);
export const initProduct = createAsyncThunk('product/init', (id: string | undefined) =>
  api.initProductFetch(id),
);
export const deleteProduct = createAsyncThunk('product/delete', (id: IdProduct) =>
  api.deleteProductFetch(id),
);
export const updateProduct = createAsyncThunk(
  'product/update',
  (obj: ProductWithoutCategoryIdandPhotos) => api.updateProductFetch(obj),
);
export const addProduct = createAsyncThunk('product/add', (obj: FormData) =>
  api.addProductFetch(obj),
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initProductOne.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(initProductOne.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(initProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(initProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
        state.product = undefined;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })

      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

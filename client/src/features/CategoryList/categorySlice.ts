import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { State } from './type/categoryType';

const initialState: State = {
  categories: [],
  error: undefined,
};

export const initCategory = createAsyncThunk('category/init', () => api.initCategoryFetch());

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
      });
  },
});

export default categorySlice.reducer;

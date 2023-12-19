import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { State } from './type/favorietesType';
import type { IdProduct } from './type/productType';

const initialState: State = {
  favorites: [],
  error: undefined,
};
export const addFavorites = createAsyncThunk('favorietes/add', (id: IdProduct) =>
  api.addFavoritestFetch(id),
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        console.log(action.payload, '>>>>>>');
      })
      .addCase(addFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;

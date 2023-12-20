import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { State } from './type/favorietesType';
import type { IdProduct } from './type/productType';

const initialState: State = {
  favorites: [],
  error: undefined,
};
export const initFavorites = createAsyncThunk('favorietes/init', () => api.initFevoritesFetch());

export const addFavorites = createAsyncThunk('favorietes/add', (id: IdProduct) =>
  api.addFavoritestFetch(id),
);

export const deleteFavorites = createAsyncThunk('favorietes/delete', (id: IdProduct) =>
  api.deleteFavoritestFetch(id),
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(initFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(addFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteFavorites.fulfilled, (state, action) => {
        // state.favorites = state.favorites.filter((like) => like.id !== action.payload);
      })
      .addCase(deleteFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default favoritesSlice.reducer;

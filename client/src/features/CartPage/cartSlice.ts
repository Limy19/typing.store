import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import type { State, cartType } from './type/cartType';
import * as api from './api';

const initialState: State = {
  cartItems: [],
};

export const add = createAsyncThunk('cart/add', api.addFetch);
export const remove = createAsyncThunk('cart/remove', api.deleteFetch);
export const load = createAsyncThunk('cart/load', api.loadFetch);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(add.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      })
      .addCase(load.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      });
  },
});

export default cartSlice.reducer;

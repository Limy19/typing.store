import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import type { State } from './type/cartCardtype';
import * as api from './api';

const initialState: State = {
  cartCard: [],
};

export const load = createAsyncThunk('card/load', api.loadFetch);

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, action) => {
      state.cartCard = action.payload;
    });
  },
});

export default cardSlice.reducer;

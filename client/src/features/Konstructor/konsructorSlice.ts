import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import type { State } from './type/konsructor';
import * as api from './api';
import { Product } from '../ProductList/type/productType';
import * as cartapi from '../CartPage/api';

const initialState: State = {
  case: null,
  switch: null,
  keycap: null,
  caseFilter: {},
  keycapFilter: {}
};

export const pickCase = createAction<Product>('konsructor/pickCase');

export const pickSwitch = createAction<Product>('konsructor/pickSwitch');
export const pickKeycap = createAction<Product>('konsructor/pickKeycap');
export const addToCart = createAsyncThunk('konsructor/addCart', async (products: Product[]) => {
  return Promise.all(products.map((p) => cartapi.addFetch(p.id)));
});
export const changeCaseFilter = createAction<{name: string, value:string}>('konsructor/changeCaseFilter')
export const changeKeycapFilter = createAction<{name: string, value:string}>('konsructor/changeKeycapFilter')

const konsructorSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pickCase, (state, action) => {
        state.case = action.payload;
      })
      .addCase(pickSwitch, (state, action) => {
        state.switch = action.payload;
      })
      .addCase(pickKeycap, (state, action) => {
        state.keycap = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.case = null;
        state.switch = null;
        state.keycap = null;
      }).addCase(changeCaseFilter, (state, action) =>{
        state.caseFilter[action.payload.name]= action.payload.value
      }).addCase(changeKeycapFilter, (state, action) =>{
        state.keycapFilter[action.payload.name]= action.payload.value
      })
  },
});

export default konsructorSlice.reducer;

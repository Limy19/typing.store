import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import type { Repair, State } from './type/repairType';

const initialState: State = {
  repair: undefined,
  error: undefined,
};

export const repair = createAsyncThunk('repair/form', (obj: Repair) => api.repairFetch(obj));

const authSlice = createSlice({
  name: 'repair',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(repair.fulfilled, (state, action) => {
        state.repair = action.payload;
      })
      .addCase(repair.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

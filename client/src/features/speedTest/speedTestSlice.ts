import { createAsyncThunk, createSlice, createAction, createSelector } from '@reduxjs/toolkit';
import type { State, speedTestType } from './type/speedTestType';
import * as api from './api';

const initialState: State = {
  text: 'Шла Маша по шоссе и сосала сушку',
  index: 0,
  timeStart: null,
  timeFinish: null,
};

export const start = createAsyncThunk('speed/start', async () => Date.now());
export const stop = createAsyncThunk('speed/stop', async () => Date.now());
export const tryChar = createAction<string>('speed/tryChar');
export const loadtext = createAsyncThunk('speed/textLoad', api.FetchRandomText);

const speedTestSlice = createSlice({
  name: 'speedTest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(start.fulfilled, (state, action) => {
        state.timeStart = action.payload;
        state.timeFinish = null;
        state.index = 0;
      })
      .addCase(stop.fulfilled, (state, action) => {
        state.timeFinish = action.payload;
      })
      .addCase(tryChar, (state, action) => {
        const current = state.text[state.index];
        console.log(current, action.payload);

        if (action.payload.toLocaleLowerCase() === current.toLocaleLowerCase()) {
          state.index++;
        }
      })
      .addCase(loadtext.fulfilled, (state, action) => {
        state.text = action.payload;
        state.index = 0;
      });
  },
});

export default speedTestSlice.reducer;

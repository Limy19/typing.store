import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Registration, State, Authentication } from './type/authType';
import * as api from './api';

const initialState: State = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (obj: Registration) =>
  api.registrationFetch(obj),
);
export const authentication = createAsyncThunk('auth/authentication', (obj: Authentication) =>
  api.authenticationFetch(obj),
);
export const logout = createAsyncThunk('auth/logout', () => api.logoutFetch());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authentication.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

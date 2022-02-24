import { createSlice } from '@reduxjs/toolkit';

import { authMe } from 'redux/middleware/authMe';
import { login } from 'redux/middleware/login';
import { InitialStateForApp } from 'redux/slices/app-slice/types';

const APP = 'app';

const initialStateForApp: InitialStateForApp = {
  status: 'idle',
  error: undefined,
  isInitialized: false,
};

const slice = createSlice({
  name: APP,
  initialState: initialStateForApp,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(authMe.fulfilled, state => {
      state.isInitialized = true;
      state.status = 'succeed';
    });
    builder.addCase(authMe.rejected, state => {
      state.isInitialized = false;
      state.status = 'failed';
    });
    builder.addCase(login.fulfilled, state => {
      state.isInitialized = true;
      state.status = 'succeed';
    });
  },
});

export const appReducer = slice.reducer;

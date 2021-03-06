import { createSlice } from '@reduxjs/toolkit';

import { authMe } from 'redux/middleware/authMe';
import { InitialStateForApp } from 'redux/slices/app-slice/types';

const APP = 'app';

const initialStateForApp: InitialStateForApp = {
  status: 'idle',
  error: undefined,
  isInitialized: false,
  message: undefined,
};

const slice = createSlice({
  name: APP,
  initialState: initialStateForApp,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(authMe.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(authMe.fulfilled, state => {
      state.isInitialized = true;
      state.status = 'succeed';
    });
    builder.addCase(authMe.rejected, state => {
      state.isInitialized = true;
      state.status = 'failed';
    });
  },
});

export const appReducer = slice.reducer;

export const { setMessage } = slice.actions;

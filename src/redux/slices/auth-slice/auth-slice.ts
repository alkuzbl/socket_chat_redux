import { createSlice } from '@reduxjs/toolkit';

import { authMe } from 'redux/middleware/authMe';
import { login } from 'redux/middleware/login';
import { signUp } from 'redux/middleware/sign-up';
import { InitialStateForAuthType, UserType } from 'redux/slices/auth-slice/types';

const AUTH = 'auth';

const initialStateForAuth: InitialStateForAuthType = {
  user: {} as UserType,
  message: undefined,
  error: undefined,
};

const slice = createSlice({
  name: AUTH,
  initialState: initialStateForAuth,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.message = action.payload.message;
    });
  },
});

export const authReducer = slice.reducer;

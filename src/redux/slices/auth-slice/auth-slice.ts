import { createSlice } from '@reduxjs/toolkit';

import { authMe } from 'redux/middleware/authMe';
import { login } from 'redux/middleware/login';
import { logOut } from 'redux/middleware/logOut';
import { signUp } from 'redux/middleware/sign-up';
import { InitialStateForAuthType, UserType } from 'redux/slices/auth-slice/types';

const AUTH = 'auth';

const initialStateForAuth: InitialStateForAuthType = {
  user: {} as UserType,
  message: undefined,
  error: undefined,
  isAuth: false,
};

const slice = createSlice({
  name: AUTH,
  initialState: initialStateForAuth,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.message = action.payload.message;
      state.isAuth = true;
    });
    builder.addCase(authMe.rejected, state => {
      state.user = {} as UserType;
      state.message = undefined;
      state.isAuth = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.message = action.payload.message;
      state.isAuth = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = {} as UserType;
      state.message = action.payload.message;
      state.isAuth = false;
    });
  },
});

export const authReducer = slice.reducer;

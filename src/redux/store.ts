import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { appReducer } from 'redux/slices';
import { authReducer } from 'redux/slices/auth-slice/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

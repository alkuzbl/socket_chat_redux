import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { appReducer } from 'redux/slices';
import { authReducer } from 'redux/slices/auth-slice/auth-slice';
import { chatReducer } from 'redux/slices/chat-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
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

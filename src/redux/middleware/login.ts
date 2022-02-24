import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi } from 'dal/auth-api';
import { RequestLoginType } from 'dal/types';
import { handleResponseError } from 'redux/utils/handleResponseError';

export const login = createAsyncThunk(
  'auth/login',
  async (data: RequestLoginType, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);

      if (response.status >= 200 && response.status < 400) {
        return response.data;
      }

      return rejectWithValue({ error: 'Try again' });
    } catch (err: any) {
      const error: string = handleResponseError(err);

      return rejectWithValue(error);
    }
  },
);

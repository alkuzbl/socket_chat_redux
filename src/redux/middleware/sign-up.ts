import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi } from 'dal/auth-api';
import { RequestType } from 'dal/types';
import { handleResponseError } from 'redux/utils/handleResponseError';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data: RequestType, { rejectWithValue }) => {
    try {
      const response = await authApi.signUp(data);

      if (response.status >= 200 && response.status < 400) {
        return response.data.message;
      }

      return rejectWithValue({ error: 'Try again' });
    } catch (err: any) {
      const error: string = handleResponseError(err);

      return rejectWithValue(error);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi } from 'dal/auth-api';
import { handleResponseError } from 'redux/utils/handleResponseError';

export const authMe = createAsyncThunk('auth/authMe', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.authMe();

    if (response.status >= 200 && response.status < 400) {
      return response.data;
    }

    return rejectWithValue({ error: 'Try again' });
  } catch (err: any) {
    const error: string = handleResponseError(err);

    return rejectWithValue(error);
  }
});

import axios from 'axios';

import { RequestLoginType, RequestType, ResponseType } from 'dal/types';
import { UserType } from 'redux/slices/auth-slice/types';

const instance = axios.create({
  baseURL: 'http://localhost:3009',
  withCredentials: true,
});

export const authApi = {
  signUp: (data: RequestType) => instance.post<{ message: string }>('/signup', data),
  login: (data: RequestLoginType) =>
    instance.post<ResponseType<UserType>>('/login', data),
  logout: () => instance.get<{ message: string }>('/logout'),
  forgot: (email: string) =>
    instance.get<{ message: string }>('forgot', { params: { email } }),
  authMe: () => instance.get<ResponseType<UserType>>('me'),
};

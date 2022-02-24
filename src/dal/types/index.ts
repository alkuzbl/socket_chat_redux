export type RequestType = {
  email: string;
  password: string;
  name: string;
  avatar?: string;
};
export type ResponseType<T> = {
  error: string;
  message: string;
  data: T;
};

export type RequestLoginType = Omit<RequestType, 'name' | 'avatar'>;

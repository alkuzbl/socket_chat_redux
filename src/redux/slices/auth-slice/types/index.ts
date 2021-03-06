export type UserType = {
  _id: string;
  email: string;
  password: string;
  name: string;
  avatar?: string;
};

export type InitialStateForAuthType = {
  user: UserType;
  message: string | undefined;
  error: string | undefined;
  isAuth: boolean;
};

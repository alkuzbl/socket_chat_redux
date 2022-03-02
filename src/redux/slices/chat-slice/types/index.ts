import { UserType } from 'redux/slices/auth-slice/types';

export type MessageType = {
  user: UserType;
  message: string;
  messageStatus: boolean;
  created: string;
  _id: string;
};
export type InitialStateChatType = {
  messages: MessageType[];
  error: string | undefined;
  message: string | undefined;
};

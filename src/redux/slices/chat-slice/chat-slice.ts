import { createSlice } from '@reduxjs/toolkit';

import { InitialStateChatType, MessageType } from 'redux/slices/chat-slice/types';

const CHAT = 'chat';

const initialStateForAuth: InitialStateChatType = {
  messages: [] as MessageType[],
  message: undefined,
  error: undefined,
};

const slice = createSlice({
  name: CHAT,
  initialState: initialStateForAuth,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const chatReducer = slice.reducer;

export const { setMessages } = slice.actions;

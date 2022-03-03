import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ScrollableFeed from 'react-scrollable-feed';

import style from './style/Messages.module.scss';

import defaultAvatar from 'assets/images/icon_av_test_1.jpg';
import { Message } from 'components/Message/Message';
import { SocketApi } from 'dal/socket-api';
import { UserType } from 'redux/slices/auth-slice/types';
import { setMessages } from 'redux/slices/chat-slice/chat-slice';
import { MessageType } from 'redux/slices/chat-slice/types';
import { RootState } from 'redux/store';

export const Messages = () => {
  const dispatch = useDispatch();

  const { _id: userId } = useSelector<RootState, UserType>(state => state.auth.user);

  const getMessage = (messages: { message: string; user: UserType }[]) =>
    dispatch(setMessages(messages));

  const messagesData = useSelector<RootState, MessageType[]>(
    state => state.chat.messages,
  );

  useEffect(() => {
    const socket = new SocketApi();
    socket.getMessage(getMessage);
  }, []);

  return (
    <ScrollableFeed className={style.messages}>
      {messagesData.map(({ message, created, _id, user: { avatar, name, _id: id } }) => (
        <Message
          message={message}
          userName={name}
          id={_id}
          avatar={avatar || defaultAvatar}
          key={_id}
          created={created}
          isMyMessage={id === userId}
        />
      ))}
    </ScrollableFeed>
  );
};

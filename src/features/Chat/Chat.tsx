import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './style/Chat.module.scss';

import { Header, Notification } from 'components';
import { MessageBox } from 'components/MessageBox/MessageBox';
import { SocketApi } from 'dal/socket-api';
import { setMessage } from 'redux/slices/app-slice/app-slice';
import { RootState } from 'redux/store';

export const Chat: FC = () => {
  const dispatch = useDispatch();

  const getSocketData = (message: string) => {
    dispatch(setMessage(message));
  };
  const message = useSelector<RootState, string | undefined>(state => state.app.message);

  useEffect(() => {
    const socket = new SocketApi();

    socket.on(getSocketData);

    return () => {
      socket.close();
    };
  }, []);

  const closeNotification = () => {
    dispatch(setMessage(undefined));
  };

  return (
    <section>
      <Header />

      <h1>Chat page name</h1>

      <div className="container">
        <div className={style.chatPage}>
          <div className={style.chatPage__info}>Здесь календарь и часы</div>
          <div className={style.chatPage__messageBox}>
            <MessageBox />
          </div>
          <div className={style.chatPage__usersBox}>Здесь профили пользователей </div>
        </div>
      </div>
      <div />
      <Notification
        open={!!message}
        close={closeNotification}
        message={message || ''}
        delay={3000}
      />
    </section>
  );
};

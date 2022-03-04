import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'sassy-datepicker';

import style from './style/Chat.module.scss';

import iconUser from 'assets/images/icon_av_test_1.jpg';
import { Header, Notification, Profile } from 'components';
import { MessageBox } from 'components/MessageBox/MessageBox';
import { SocketApi } from 'dal/socket-api';
import { setMessage } from 'redux/slices/app-slice/app-slice';
import { RootState } from 'redux/store';

export const Chat: FC = () => {
  const dispatch = useDispatch();

  const onChange = (date: Date) => {
    console.log(date.toString());
  };

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

  useEffect(() => {
    // dispatch()
  }, []);

  const closeNotification = () => {
    dispatch(setMessage(undefined));
  };

  return (
    <section>
      <Header />
      <div className="container">
        <div className={style.chatPage}>
          <div className={style.chatPage__info}>
            <DatePicker onChange={onChange} />
          </div>
          <div className={style.chatPage__messageBox}>
            <MessageBox />
          </div>
          <div className={style.chatPage__usersBox}>
            <Profile
              avatar={iconUser}
              email="test@test.ru"
              name="Sasha"
              phone="375 44 777 77 26"
            />
          </div>
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

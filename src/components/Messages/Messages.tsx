import style from './style/Messages.module.scss';

import avatar from 'assets/images/icon_av_test_1.jpg';
import { Message } from 'components/Message/Message';

export const Messages = () => {
  const message =
    'Здесь будут сообщения Здесь будут сообщения Здесь будут сообщения Здесь будут сообщения';
  return (
    <div className={style.messages}>
      <Message
        message={message}
        userName="Vasya"
        id="1"
        avatar={avatar}
        key="1"
        created="12:34"
        isMyMessage
      />
      <Message
        message={message}
        userName="Vasya"
        id="2"
        avatar={avatar}
        key="2"
        created="12:34"
        isMyMessage
      />
      <Message
        message={message}
        userName="Vasya"
        id="3"
        avatar={avatar}
        key="3"
        created="12:34"
        isMyMessage={false}
      />
      <Message
        message={message}
        userName="Vasya"
        id="4"
        avatar={avatar}
        key="4"
        created="12:34"
        isMyMessage={false}
      />
      <Message
        message={message}
        userName="Vasya"
        id="5"
        avatar={avatar}
        key="5"
        created="12:34"
        isMyMessage={false}
      />
      <Message
        message={message}
        userName="Vasya"
        id="6"
        avatar={avatar}
        key="6"
        created="12:34"
        isMyMessage={false}
      />
    </div>
  );
};

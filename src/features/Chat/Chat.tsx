import { FC } from 'react';

import style from './style/Chat.module.scss';

import { Header } from 'components';
import { MessageBox } from 'components/MessageBox/MessageBox';

export const Chat: FC = () => (
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
  </section>
);

import style from './style/Messages.module.scss';

export const Messages = () => {
  const message = 'Здесь будут сообщения';
  return <div className={style.messages}>{message}</div>;
};

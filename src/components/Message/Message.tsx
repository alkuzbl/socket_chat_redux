import React, { FC } from 'react';

import Avatar from '@material-ui/core/Avatar';

import { StyledBadge } from './style/index';
import style from './style/Message.module.scss';
import { MessagePropsType } from './types';

import iconMenu from 'assets/images/icon_menu_message.svg';

export const Message: FC<MessagePropsType> = props => {
  const { id, message, userName, avatar, created, isMyMessage, isActive } = props;
  const time = created.split('').splice(11, 5).join('');

  const handleClickMenuMessage = () => {
    console.log(
      `userName - ${userName}, id - ${id}, message - ${message}, avatar - ${avatar}, isActive - ${isActive}`,
    );
  };

  return (
    <div className={isMyMessage ? style.myMessage : style.message}>
      <div className={style.message__wrapper}>
        <div className={isMyMessage ? style.myMessage__avatar : style.message__avatar}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            invisible={!isActive}
          >
            <Avatar alt={userName} src={avatar} />
          </StyledBadge>
        </div>

        <div className={style.message__content}>
          <span
            className={isMyMessage ? style.myMessage__userName : style.message__userName}
          >
            {userName}
          </span>
          {message}
          <span className={style.message__time}>{time}</span>
          <span
            role="presentation"
            className={isMyMessage ? style.myMessage__edit : style.message__edit}
            onClick={handleClickMenuMessage}
          >
            <img src={iconMenu} alt="Edit menu" />
          </span>
        </div>
      </div>
    </div>
  );
};

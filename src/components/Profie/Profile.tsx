import { FC } from 'react';

import Avatar from '@mui/material/Avatar';

import style from './style/Profile.module.scss';

import { ProfilePropsType } from 'components/Profie/types';

export const Profile: FC<ProfilePropsType> = props => {
  const { avatar, email, name } = props;
  return (
    <div className={style.profile}>
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{ width: 56, height: 56, margin: '0 auto' }}
      />
      <p className={style.profile__name}>{name}</p>
      <p>
        <span className={style.profile__subtitle}>email: </span>
        {email}
      </p>
    </div>
  );
};

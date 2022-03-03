import React from 'react';

import { useDispatch } from 'react-redux';

import style from './style/Header.module.scss';

import logo from 'assets/images/logo.png';
import { logOut } from 'redux/middleware/logOut';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClickOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <div className={style.header__searchBox}>
            <img src={logo} alt="logo" className={style.header__logo} />
            <input type="text" className={style.header__search} />
          </div>
          <div className={style.header__menu}>
            <button
              className={style.header__menuButton}
              type="button"
              onClick={handleClickOut}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

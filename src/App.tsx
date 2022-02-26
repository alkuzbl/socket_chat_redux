import React, { FC, useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { useRoute } from 'hooks/routes';
import { authMe } from 'redux/middleware/authMe';
import { RootState } from 'redux/store';

const App: FC = () => {
  const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMe());
  }, []);

  const route = useRoute(isAuth);

  return <div className="App">{route}</div>;
};

export default App;

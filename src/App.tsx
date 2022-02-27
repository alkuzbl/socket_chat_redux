import React, { FC, useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'components';
import { useRoute } from 'hooks/routes';
import { authMe } from 'redux/middleware/authMe';
import { RootState } from 'redux/store';

const App: FC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth);

  const route = useRoute(isAuth);

  useEffect(() => {
    dispatch(authMe());
  }, []);

  const isInitialized = useSelector<RootState, boolean>(state => state.app.isInitialized);

  if (!isInitialized) {
    return <Spinner />;
  }

  return <div className="App">{route}</div>;
};

export default App;

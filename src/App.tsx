import React, { FC } from 'react';

import './App.css';
import { useRoute } from 'hooks/routes';

const App: FC = () => {
  const isAuth = false;
  const route = useRoute(isAuth);

  return <div className="App">{route}</div>;
};

export default App;

import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Chat, Login, RecoveryPassword, Registration } from 'features';

export const useRoute = (auth: boolean) => {
  if (!auth) {
    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        <Route path="forgot" element={<RecoveryPassword />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="chat" element={<Chat />} />
      <Route path="/" element={<Navigate to="chat" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

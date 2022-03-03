import { FC, useEffect } from 'react';

import Snackbar from '@mui/material/Snackbar';

import { NotificationPropsType } from './types';

export const Notification: FC<NotificationPropsType> = props => {
  const { open, close, message, delay } = props;

  useEffect(() => {
    const id = setTimeout(() => {
      close();
    }, delay);
    return () => clearTimeout(id);
  }, [open]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      message={message}
    />
  );
};

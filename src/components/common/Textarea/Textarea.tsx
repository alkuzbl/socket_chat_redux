import { ChangeEvent, useState } from 'react';

import Button from '@material-ui/core/Button';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';

import { styleForSendButton } from './style';
import style from './style/Textarea.module.scss';

import { SocketApi } from 'dal/socket-api';
import { UserType } from 'redux/slices/auth-slice/types';
import { RootState } from 'redux/store';

const socket = new SocketApi();

export const Textarea = () => {
  const [value, setValue] = useState<string>('');
  const user = useSelector<RootState, UserType>(state => state.auth.user);

  const handleClickButton = () => {
    if (value) {
      socket.sendMessage({ message: value, user });
      setValue('');
    }
  };

  const handleKeyPressEnter = (event: { key: string; preventDefault: Function }) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClickButton();
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className={style.textarea}>
      <textarea
        className={style.textarea__input}
        onChange={handleOnChange}
        value={value}
        rows={2}
        placeholder="Message..."
        onKeyPress={handleKeyPressEnter}
      />
      <Button
        style={styleForSendButton}
        endIcon={<SendIcon />}
        onClick={handleClickButton}
      >
        Send
      </Button>
    </div>
  );
};

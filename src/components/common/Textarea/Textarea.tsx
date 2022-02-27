import { ChangeEvent, useState } from 'react';

import Button from '@material-ui/core/Button';
import SendIcon from '@mui/icons-material/Send';

import { styleForSendButton } from './style';
import style from './style/Textarea.module.scss';

export const Textarea = () => {
  const [value, setValue] = useState<string>('');

  const handleClickButton = () => {
    if (value) {
      console.log(value);
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

import style from './style/MessageBox.module.scss';

import { Textarea } from 'components/common/Textarea/Textarea';
import { Messages } from 'components/Messages/Messages';

export const MessageBox = () => (
  <div className={style.messageBox}>
    <div className={style.messageBox__content}>
      <Messages />
    </div>
    <Textarea />
  </div>
);

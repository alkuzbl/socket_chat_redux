import { FC } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import style from './style/Message.module.scss';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
type MessagePropsType = {
  userName: string;
  id: string;
  message: string;
  avatar: string;
};
export const Message: FC<MessagePropsType> = props => {
  const { id, message, userName, avatar } = props;

  const handleUpdateMessage = () => {
    console.log(
      `userName - ${userName}, id - ${id}, message - ${message}, avatar - ${avatar}`,
    );
  };

  return (
    <div className={style.message} role="presentation" onClick={handleUpdateMessage}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt={userName} src={avatar} />
      </StyledBadge>
      <div>{message}</div>
    </div>
  );
};

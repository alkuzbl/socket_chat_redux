import React, { FC } from 'react';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { Nullable } from 'types/nullabel';

type MobileMenuPropsType = {
  isMobileMenuOpen: boolean;
  anchorEl: Nullable<HTMLElement>;
  onClickMobileMenuClose: () => void;
  onClickProfileMenuOpen: (value: any) => void;
  mobileMenuId: string;
};

export const MobileMenu: FC<MobileMenuPropsType> = props => {
  const {
    isMobileMenuOpen,
    onClickMobileMenuClose,
    onClickProfileMenuOpen,
    anchorEl,
    mobileMenuId,
  } = props;

  const handleMobileMenuClose = () => {
    onClickMobileMenuClose();
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    onClickProfileMenuOpen(event.currentTarget);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

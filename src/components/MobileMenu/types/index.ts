import { Nullable } from 'types/nullabel';

export type MobileMenuPropsType = {
  isMobileMenuOpen: boolean;
  anchorEl: Nullable<HTMLElement>;
  onClickMobileMenuClose: () => void;
  onClickProfileMenuOpen: (value: any) => void;
  mobileMenuId: string;
};

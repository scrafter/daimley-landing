import React from 'react';
import useTranslation from '@/useTranslation';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '@/constants';
import { MenuStyled, MenuItemStyled, MenuGroup } from './MainMenu.styles';

function MainMenu() {
  const { translate } = useTranslation();
  return (
    <MenuStyled>
      <MenuGroup>
        <MenuItemStyled>{translate(`menu.main`)}</MenuItemStyled>
        <MenuItemStyled>{translate(`menu.trainings`)}</MenuItemStyled>
        <MenuItemStyled>{translate(`menu.aboutUs`)}</MenuItemStyled>
        <MenuItemStyled>{translate(`menu.contact`)}</MenuItemStyled>
      </MenuGroup>

      <MenuGroup>
        <MenuItemStyled>{PHONE_NUMBER}</MenuItemStyled>
        <MenuItemStyled>{EMAIL_ADDRESS}</MenuItemStyled>
      </MenuGroup>
    </MenuStyled>
  );
}

export default MainMenu;

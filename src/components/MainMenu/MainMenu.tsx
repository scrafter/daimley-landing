import React, { useLayoutEffect, useState } from 'react';
import useTranslation from '@/useTranslation';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '@/constants';
import { MenuStyled, MenuItemStyled, MenuGroup } from './MainMenu.styles';

function MainMenu() {
  const { translate } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener(`scroll`, updatePosition);
    updatePosition();
    return () => window.removeEventListener(`scroll`, updatePosition);
  }, []);

  return (
    <MenuStyled isScrollOnTop={scrollPosition === 0}>
      <MenuGroup>
        <MenuItemStyled href="/">{translate(`menu.main`)}</MenuItemStyled>
        <MenuItemStyled>{translate(`menu.trainings`)}</MenuItemStyled>
        <MenuItemStyled href="/about-us">
          {translate(`menu.aboutUs`)}
        </MenuItemStyled>
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

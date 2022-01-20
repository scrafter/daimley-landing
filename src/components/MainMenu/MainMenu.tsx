import React, { useLayoutEffect, useState } from 'react';
import useTranslation from '@/useTranslation';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import { MenuStyled, MenuItemStyled, MenuGroup } from './MainMenu.styles';
import Logo from '@/assets/icons/Logo';

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
        <MenuItemStyled href="/">
          <Logo />
        </MenuItemStyled>
        <MenuItemStyled href="/">{translate(`menu.main`)}</MenuItemStyled>
        <MenuItemStyled href="/trainings">
          {translate(`menu.trainings`)}
        </MenuItemStyled>
        <MenuItemStyled href="/recruitment">
          {translate(`menu.recruitment`)}
        </MenuItemStyled>
        <MenuItemStyled href="/about-us">
          {translate(`menu.aboutUs`)}
        </MenuItemStyled>
        <MenuItemStyled href="/contact">
          {translate(`menu.contact`)}
        </MenuItemStyled>
      </MenuGroup>

      <MenuGroup>
        <MenuItemStyled href={`tel:${PHONE_NUMBER}`}>
          {PHONE_NUMBER_TO_READ}
        </MenuItemStyled>
        <MenuItemStyled href={`mailto:${EMAIL_ADDRESS}`}>
          {EMAIL_ADDRESS}
        </MenuItemStyled>
      </MenuGroup>
    </MenuStyled>
  );
}

export default MainMenu;

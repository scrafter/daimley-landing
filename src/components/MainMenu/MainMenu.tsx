import React, { useLayoutEffect, useState } from 'react';
import useTranslation from '@/useTranslation';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import { MenuStyled, MenuItemStyled, MenuGroup } from './MainMenu.styles';
import Logo from '@/assets/icons/Logo';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import LogoWhite from '@/assets/icons/LogoWhite';

interface Props {
  darkMenu?: boolean;
}

function MainMenu({ darkMenu }: Props) {
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

  const iconsFill = darkMenu ? `#000` : `#FFF`;

  return (
    <MenuStyled isScrollOnTop={scrollPosition === 0} darkMenu={darkMenu}>
      <MenuGroup>
        <MenuItemStyled href="/">
          {darkMenu ? <Logo /> : <LogoWhite />}
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
          <PhoneIcon fill={iconsFill} />
          {PHONE_NUMBER_TO_READ}
        </MenuItemStyled>
        <MenuItemStyled href={`mailto:${EMAIL_ADDRESS}`}>
          <MailIcon fill={iconsFill} />
          {EMAIL_ADDRESS}
        </MenuItemStyled>
      </MenuGroup>
    </MenuStyled>
  );
}

export default MainMenu;

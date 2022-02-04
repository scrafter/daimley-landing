import React, { useLayoutEffect, useState } from 'react';
import useTranslation from '@/useTranslation';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import {
  MenuTrigger,
  MenuStyled,
  MenuItemStyled,
  MenuGroup,
} from './MainMenu.styles';
import Logo from '@/assets/icons/Logo';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import LogoWhite from '@/assets/icons/LogoWhite';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@/components/MainMenu/Drawer/Drawer';

interface Props {
  darkMenu?: boolean;
}

function MainMenu({ darkMenu }: Props) {
  const { translate } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <MenuTrigger darkMenu={darkMenu}>
          <MenuIcon onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
        </MenuTrigger>

        <MenuItemStyled href="/" className="logo">
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

      <Drawer open={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
    </MenuStyled>
  );
}

export default MainMenu;

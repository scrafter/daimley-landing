import React, { useLayoutEffect, useState } from 'react';
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
import MenuItem from './MenuItem/MenuItem';
import { CV_EMAIL } from '@/components/MainPage/MainPageHeader/MainPageHeader';

interface Props {
  darkMenu?: boolean;
}

function MainMenu({ darkMenu }: Props) {
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
        <MenuItem
          label="menu.main"
          subItems={[
            { label: `menu.main.ourServices`, link: `/about-us#our-services` },
            { label: `menu.main.delegateService`, link: `/form` },
            { label: `menu.main.sendCV`, link: CV_EMAIL },
            { label: `menu.main.references`, link: `/#references` },
          ]}
        />

        <MenuItem
          label="menu.trainings"
          subItems={[
            {
              label: `menu.trainings.howDoWeTrain`,
              link: `/trainings#how-do-we-train`,
            },
            { label: `menu.trainings.types`, link: `/trainings#types` },
          ]}
        />

        <MenuItem
          label="menu.recruitment"
          subItems={[
            {
              label: `menu.recruitment.positions`,
              link: `/recruitment#positions`,
            },
            {
              label: `menu.recruitment.businesses`,
              link: `/recruitment#positions`,
            },
            { label: `menu.recruitment.process`, link: `/recruitment#process` },
            { label: `menu.recruitment.whyWe`, link: `/recruitment#why-we` },
          ]}
        />

        <MenuItem
          label="menu.aboutUs"
          subItems={[
            {
              label: `menu.aboutUs.getKnowDaimley`,
              link: `/about-us#get-know-daimley`,
            },
            {
              label: `menu.aboutUs.ourServices`,
              link: `/about-us#our-services`,
            },
            { label: `menu.aboutUs.ourTeam`, link: `/about-us#our-team` },
            { label: `menu.aboutUs.ourValues`, link: `/about-us#our-values` },
          ]}
        />

        <MenuItem
          label="menu.contact"
          subItems={[
            { label: `menu.contact.delegateForm`, link: `/form` },
            { label: `menu.contact.form`, link: `/contact#form` },
            { label: `menu.contact.sendCV`, link: CV_EMAIL },
          ]}
        />
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

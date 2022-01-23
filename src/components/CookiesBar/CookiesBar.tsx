import React, { useEffect, useState } from 'react';
import {
  CookiesBarStyled,
  Content,
  CloseButton,
} from '@/components/CookiesBar/CookiesBar.styles';
import useTranslation from '@/useTranslation';
import Cookies from 'js-cookie';

const COOKIE_NAME = `isCookiePolicyAccepted`;

function CookiesBar() {
  const { translate } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAccepted = Cookies.get(COOKIE_NAME);
    if (!isAccepted) {
      setIsOpen(true);
    }
  }, []);

  const onClose = () => {
    Cookies.set(COOKIE_NAME, true, { expires: 30 });
    setIsOpen(false);
  };

  return isOpen ? (
    <CookiesBarStyled>
      <Content>{translate(`cookies.content`)}</Content>

      <CloseButton onClick={onClose}>x</CloseButton>
    </CookiesBarStyled>
  ) : null;
}

export default CookiesBar;

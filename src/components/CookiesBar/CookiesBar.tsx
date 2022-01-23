import React, { useState } from 'react';
import {
  CookiesBarStyled,
  Content,
  CloseButton,
} from '@/components/CookiesBar/CookiesBar.styles';
import useTranslation from '@/useTranslation';

function CookiesBar() {
  const { translate } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <CookiesBarStyled>
      <Content>{translate(`cookies.content`)}</Content>

      <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>
    </CookiesBarStyled>
  ) : null;
}

export default CookiesBar;

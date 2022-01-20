import React from 'react';
import {
  GoBack,
  Page404Styled,
  Title,
} from '@/components/Page404/Page404.styles';
import Logo from '@/assets/icons/Logo';
import useTranslation from '@/useTranslation';

function Page404() {
  const { translate } = useTranslation();

  return (
    <Page404Styled>
      <Logo />
      <Title>{translate(`general.404`)}</Title>
      <GoBack href="/">{translate(`general.goBack`)}</GoBack>
    </Page404Styled>
  );
}

export default Page404;

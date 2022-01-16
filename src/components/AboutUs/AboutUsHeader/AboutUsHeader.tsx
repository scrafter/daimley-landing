import React from 'react';
import useTranslation from '@/useTranslation';
import {
  AboutUsHeaderStyled,
  Title,
  SubTitle,
} from '@/components/AboutUs/AboutUsHeader/AboutUsHeader.styles';

function AboutUsHeader() {
  const { translate } = useTranslation();

  return (
    <AboutUsHeaderStyled>
      <SubTitle>{translate(`aboutUs.subTitle`)}</SubTitle>
      <Title>{translate(`aboutUs.title`)}</Title>
    </AboutUsHeaderStyled>
  );
}

export default AboutUsHeader;

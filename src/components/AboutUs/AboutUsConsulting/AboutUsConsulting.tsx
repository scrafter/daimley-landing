import React from 'react';
import useTranslation from '@/useTranslation';
import {
  AboutUsConsultingStyled,
  Description,
  Image,
} from '@/components/AboutUs/AboutUsConsulting/AboutUsConsulting.styles';
import Button from '@/components/Shared/Button/Button';

function AboutUsConsulting() {
  const { translate } = useTranslation();
  return (
    <AboutUsConsultingStyled>
      <div>
        <Description>{translate(`aboutUs.consulting.description`)}</Description>
        <Button label={translate(`aboutUs.consulting.button`)} />
      </div>
      <Image />
    </AboutUsConsultingStyled>
  );
}

export default AboutUsConsulting;

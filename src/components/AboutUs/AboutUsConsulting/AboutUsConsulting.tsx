import React from 'react';
import useTranslation from '@/useTranslation';
import {
  AboutUsConsultingStyled,
  Description,
} from '@/components/AboutUs/AboutUsConsulting/AboutUsConsulting.styles';
import Button from '@/components/Shared/Button/Button';
import { StaticImage } from 'gatsby-plugin-image';

function AboutUsConsulting() {
  const { translate } = useTranslation();
  return (
    <AboutUsConsultingStyled>
      <div>
        <Description>{translate(`aboutUs.consulting.description`)}</Description>
        <Button link="/form" label={translate(`aboutUs.consulting.button`)} />
      </div>

      <StaticImage
        src="../../../assets/aboutUs/aboutUs3.jpg"
        alt="Recruitment photo"
        width={540}
        height={885}
      />
    </AboutUsConsultingStyled>
  );
}

export default AboutUsConsulting;

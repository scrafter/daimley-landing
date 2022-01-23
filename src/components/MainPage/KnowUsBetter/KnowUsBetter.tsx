import React from 'react';
import {
  Description,
  DescriptionSection,
  KnowUsBetterStyled,
  KnowUsBetterWrapper,
  SubTitle,
  Title,
} from '@/components/MainPage/KnowUsBetter/KnowUsBetter.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';
import { StaticImage } from 'gatsby-plugin-image';

function KnowUsBetter() {
  const { translate } = useTranslation();

  return (
    <KnowUsBetterStyled>
      <KnowUsBetterWrapper>
        <StaticImage
          src="../../../assets/home/home2.jpg"
          alt="Recruitment photo"
        />

        <DescriptionSection>
          <SubTitle>{translate(`knowUsBetter.subTitle`)}</SubTitle>
          <Title>{translate(`knowUsBetter.title`)}</Title>
          <Description>{translate(`knowUsBetter.description`)}</Description>
          <Button link="/about-us" label={translate(`knowUsBetter.button`)} />
        </DescriptionSection>
      </KnowUsBetterWrapper>
    </KnowUsBetterStyled>
  );
}

export default KnowUsBetter;

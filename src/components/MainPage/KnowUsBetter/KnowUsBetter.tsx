import React from 'react';
import {
  Description,
  DescriptionSection,
  KnowUsBetterStyled,
  KnowUsBetterWrapper,
  SubTitle,
  Title,
} from '@/components/MainPage/KnowUsBetter/KnowUsBetter.styles';
import PhotoMock from '@/components/PhotoMock/PhotoMock';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';

function KnowUsBetter() {
  const { translate } = useTranslation();

  return (
    <KnowUsBetterStyled>
      <KnowUsBetterWrapper>
        <PhotoMock width={620} height={630} />

        <DescriptionSection>
          <SubTitle>{translate(`knowUsBetter.subTitle`)}</SubTitle>
          <Title>{translate(`knowUsBetter.title`)}</Title>
          <Description>{translate(`knowUsBetter.description`)}</Description>
          <Button label={translate(`knowUsBetter.button`)} />
        </DescriptionSection>
      </KnowUsBetterWrapper>
    </KnowUsBetterStyled>
  );
}

export default KnowUsBetter;

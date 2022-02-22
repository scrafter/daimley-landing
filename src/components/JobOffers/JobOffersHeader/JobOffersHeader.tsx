import React from 'react';
import {
  JobOffersHeaderStyled,
  Title,
  SubTitle,
} from '@/components/JobOffers/JobOffersHeader/JobOffersHeader.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';
import { CV_VERIFY_EMAIL } from '@/components/MainPage/MainPageHeader/MainPageHeader';

function JobOffersHeader() {
  const { translate } = useTranslation();

  return (
    <JobOffersHeaderStyled>
      <SubTitle>{translate(`jobOffers.header.subTitle`)}</SubTitle>
      <Title>{translate(`jobOffers.header.title`)}</Title>
      <Button
        link={CV_VERIFY_EMAIL}
        label={translate(`jobOffers.header.button`)}
      />
    </JobOffersHeaderStyled>
  );
}

export default JobOffersHeader;

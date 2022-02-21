import React from 'react';
import {
  JobOffersHeaderStyled,
  Title,
  SubTitle,
} from '@/components/JobOffers/JobOffersHeader/JobOffersHeader.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';

function JobOffersHeader() {
  const { translate } = useTranslation();

  return (
    <JobOffersHeaderStyled>
      <SubTitle>{translate(`jobOffers.header.subTitle`)}</SubTitle>
      <Title>{translate(`jobOffers.header.title`)}</Title>
      <Button link="/form" label={translate(`recruitment.header.button`)} />
    </JobOffersHeaderStyled>
  );
}

export default JobOffersHeader;

import React from 'react';
import {
  JobOffersHeaderStyled,
  Title,
  Description,
} from '@/components/JobOffers/JobOffersHeader/JobOffersHeader.styles';
import useTranslation from '@/useTranslation';

function JobOffersHeader() {
  const { translate } = useTranslation();

  return (
    <JobOffersHeaderStyled>
      <Title>{translate(`jobOffers.header.title`)}</Title>
      <Description>{translate(`jobOffers.header.description`)}</Description>
    </JobOffersHeaderStyled>
  );
}

export default JobOffersHeader;

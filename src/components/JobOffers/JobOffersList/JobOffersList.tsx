import React from 'react';
import {
  JobOffersListStyled,
  SubTitle,
  Title,
  List,
} from '@/components/JobOffers/JobOffersList/JobOffersList.styles';
import useTranslation from '@/useTranslation';
import { JOB_OFFERS } from '@/components/JobOffers/JobOffersList/jobOffers';
import TrainingItem from '@/components/Trainings/AboutTrainings/TrainingItem/TrainingItem';

const LABELS = [
  `jobOffers.list.button`,
  `jobOffers.list.label1`,
  `jobOffers.list.label2`,
  `jobOffers.list.label3`,
  `jobOffers.list.label4`,
  `jobOffers.list.label5`,
];

function JobOffersList() {
  const { translate } = useTranslation();

  return (
    <JobOffersListStyled id="list">
      <SubTitle>{translate(`jobOffers.list.subTitle`)}</SubTitle>
      <Title>{translate(`jobOffers.list.title`)}</Title>

      <List>
        {JOB_OFFERS.map((item, key) => (
          <TrainingItem labels={LABELS} item={item} key={`job-offer-${key}`} />
        ))}
      </List>
    </JobOffersListStyled>
  );
}

export default JobOffersList;

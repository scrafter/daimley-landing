import React from 'react';
import {
  AboutTrainingsStyled,
  List,
  Title,
  SubTitle,
} from '@/components/Trainings/AboutTrainings/AboutTrainings.styles';
import useTranslation from '@/useTranslation';
import { TRAININGS_LIST } from '@/components/Trainings/trainingsList';
import TrainingItem from '@/components/Trainings/AboutTrainings/TrainingItem/TrainingItem';

function AboutTrainings() {
  const { translate } = useTranslation();

  return (
    <AboutTrainingsStyled id="types">
      <SubTitle>{translate(`trainings.list.subTitle`)}</SubTitle>
      <Title>{translate(`trainings.list.subTitle`)}</Title>

      <List>
        {TRAININGS_LIST.map((item, key) => (
          <TrainingItem item={item} key={`training-item-${key}`} />
        ))}
      </List>
    </AboutTrainingsStyled>
  );
}

export default AboutTrainings;

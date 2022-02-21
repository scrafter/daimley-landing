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

const LABELS = [
  `trainings.list.button`,
  `trainings.list.target`,
  `trainings.list.receivers`,
  `trainings.list.structure`,
  `trainings.list.consistOf`,
  `trainings.list.effects`,
];

function AboutTrainings() {
  const { translate } = useTranslation();

  return (
    <AboutTrainingsStyled id="types">
      <SubTitle>{translate(`trainings.list.subTitle`)}</SubTitle>
      <Title>{translate(`trainings.list.title`)}</Title>

      <List>
        {TRAININGS_LIST.map((item, key) => (
          <TrainingItem
            labels={LABELS}
            item={item}
            key={`training-item-${key}`}
          />
        ))}
      </List>
    </AboutTrainingsStyled>
  );
}

export default AboutTrainings;

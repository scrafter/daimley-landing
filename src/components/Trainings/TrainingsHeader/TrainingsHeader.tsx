import React from 'react';
import {
  TrainingsHeaderStyled,
  Title,
  Description,
} from '@/components/Trainings/TrainingsHeader/TrainingsHeader.styles';
import useTranslation from '@/useTranslation';

function TrainingsHeader() {
  const { translate } = useTranslation();

  return (
    <TrainingsHeaderStyled>
      <Title>{translate(`trainings.header.title`)}</Title>
      <Description>{translate(`trainings.header.description`)}</Description>
    </TrainingsHeaderStyled>
  );
}

export default TrainingsHeader;

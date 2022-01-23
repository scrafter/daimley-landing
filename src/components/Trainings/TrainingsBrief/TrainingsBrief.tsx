import React from 'react';
import {
  TrainingsBriefStyled,
  DescriptionWrapper,
  Summary,
  Title,
  Paragraph,
} from '@/components/Trainings/TrainingsBrief/TrainingsBrief.styles';
import useTranslation from '@/useTranslation';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '@/components/Shared/Button/Button';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';

function TrainingsBrief() {
  const { translate } = useTranslation();
  return (
    <TrainingsBriefStyled>
      <StaticImage
        src="../../../assets/trainings/trainings2.jpg"
        alt="Recruitment photo"
      />

      <DescriptionWrapper>
        <Title>
          <UnderlinedText text={translate(`trainings.brief.title`)} />
        </Title>
        <Summary>{translate(`trainings.brief.summary`)}</Summary>

        <Paragraph>{translate(`trainings.brief.paragraph1`)}</Paragraph>
        <Paragraph>{translate(`trainings.brief.paragraph2`)}</Paragraph>
        <Paragraph>{translate(`trainings.brief.paragraph3`)}</Paragraph>

        <Button label={translate(`trainings.brief.button`)} link="/form" />
      </DescriptionWrapper>
    </TrainingsBriefStyled>
  );
}

export default TrainingsBrief;

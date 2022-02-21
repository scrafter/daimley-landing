import React from 'react';
import {
  JobOffersDescriptionStyled,
  DescriptionWrapper,
  Title,
  Description,
} from '@/components/JobOffers/JobOffersDescription/JobOffersDescription.styles';
import { StaticImage } from 'gatsby-plugin-image';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import Button from '@/components/Shared/Button/Button';
import { CV_EMAIL } from '@/components/MainPage/MainPageHeader/MainPageHeader';

function JobOffersDescription() {
  const { translate } = useTranslation();

  return (
    <JobOffersDescriptionStyled>
      <StaticImage
        src="../../../assets/recruitment/recr1.png"
        alt="Recruitment photo"
      />

      <DescriptionWrapper>
        <Title>
          <UnderlinedText text={translate(`jobOffers.description.title1`)} />
          {translate(`jobOffers.description.title2`)}
        </Title>

        <Description>{translate(`jobOffers.description.text1`)}</Description>

        <Button
          label={translate(`jobOffers.description.sendCV`)}
          link={CV_EMAIL}
        />

        <Description>
          {translate(`jobOffers.description.text21`)}
          <strong>{translate(`jobOffers.description.text22`)}</strong>
          {translate(`jobOffers.description.text23`)}
        </Description>

        <Button
          label={translate(`jobOffers.description.contactUs`)}
          link="/form"
        />
      </DescriptionWrapper>
    </JobOffersDescriptionStyled>
  );
}

export default JobOffersDescription;

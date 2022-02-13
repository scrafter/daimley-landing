import React from 'react';
import {
  RecruitmentBenefitsStyled,
  BackgroundWrapper,
  BulletsWrapper,
  ImageWrapper,
  DescriptionWrapper,
  Description,
  Title,
} from '@/components/Recruitment/RecruitmentBenefits/RecruitmentBenefits.styles';
import useTranslation from '@/useTranslation';
import BulletItem from '@/components/Shared/BulletItem/BulletItem';
import Button from '@/components/Shared/Button/Button';
import { StaticImage } from 'gatsby-plugin-image';

function RecruitmentBenefits() {
  const { translate } = useTranslation();

  return (
    <RecruitmentBenefitsStyled id="why-we">
      <BackgroundWrapper />

      <DescriptionWrapper>
        <Title>{translate(`recruitment.benefits.title`)}</Title>

        <BulletsWrapper>
          <BulletItem text={translate(`recruitment.benefits.bullet1`)} />
          <BulletItem text={translate(`recruitment.benefits.bullet2`)} />
          <BulletItem text={translate(`recruitment.benefits.bullet3`)} />
          <BulletItem text={translate(`recruitment.benefits.bullet4`)} />
        </BulletsWrapper>

        <Description>
          {translate(`recruitment.benefits.description`)}
        </Description>
      </DescriptionWrapper>

      <ImageWrapper>
        <StaticImage
          src="../../../assets/recruitment/recr2.png"
          alt="Recruitment photo"
        />
        <Button link="/form" label={translate(`recruitment.benefits.button`)} />
      </ImageWrapper>
    </RecruitmentBenefitsStyled>
  );
}

export default RecruitmentBenefits;

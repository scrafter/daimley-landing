import React from 'react';
import {
  RecruitmentSpecialityStyled,
  Wrapper,
  BackgroundWrapper,
  DescriptionSection,
  Description,
  BulletsDescription,
  SubTitle,
  Title,
  WeSpecilizeDescription,
} from '@/components/Recruitment/RecruitmentSpeciality/RecruitmentSpeciality.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import { StaticImage } from 'gatsby-plugin-image';
import BulletsList from '@/components/Shared/BulletsList/BulletsList';

function RecruitmentSpeciality() {
  const { translate } = useTranslation();

  return (
    <RecruitmentSpecialityStyled id="positions">
      <BackgroundWrapper />
      <Wrapper>
        <StaticImage
          src="../../../assets/recruitment/recr1.png"
          alt="Recruitment photo"
        />

        <DescriptionSection>
          <Description>
            {translate(`recruitment.speciality.description`)}
          </Description>
          <Button
            label={translate(`recruitment.speciality.button`)}
            link="/form"
          />

          <SubTitle>{translate(`recruitment.speciality.subTitle`)}</SubTitle>

          <Title>
            {translate(`recruitment.speciality.title1`)}
            <UnderlinedText text={translate(`recruitment.speciality.title2`)} />
          </Title>

          <WeSpecilizeDescription>
            {translate(`recruitment.speciality.weSpecialize`)}

            <BulletsList
              items={[
                `recruitment.speciality.speciality1`,
                `recruitment.speciality.speciality2`,
                `recruitment.speciality.speciality3`,
              ]}
            />
          </WeSpecilizeDescription>

          <BulletsDescription>
            {translate(`recruitment.speciality.bulletsDescription`)}
          </BulletsDescription>

          <BulletsList
            items={[
              `recruitment.speciality.bullet1`,
              `recruitment.speciality.bullet2`,
              `recruitment.speciality.bullet3`,
              `recruitment.speciality.bullet4`,
              `recruitment.speciality.bullet5`,
              `recruitment.speciality.bullet6`,
            ]}
          />
        </DescriptionSection>
      </Wrapper>
    </RecruitmentSpecialityStyled>
  );
}

export default RecruitmentSpeciality;

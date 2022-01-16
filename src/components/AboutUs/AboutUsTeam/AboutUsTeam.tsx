import React from 'react';
import {
  AboutUsTeamStyled,
  Wrapper,
  Image,
  Title,
  SubTitle,
  Brief,
  Description,
} from '@/components/AboutUs/AboutUsTeam/AboutUsTeam.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';

function AboutUsTeam() {
  const { translate } = useTranslation();
  return (
    <AboutUsTeamStyled>
      <Wrapper>
        <Image />

        <div>
          <SubTitle>{translate(`aboutUs.main.subTitle`)}</SubTitle>
          <Title>
            <UnderlinedText text={translate(`aboutUs.main.title1`)} />
            {translate(`aboutUs.main.title2`)}
          </Title>

          <Brief>{translate(`aboutUs.main.brief`)}</Brief>

          <Description>{translate(`aboutUs.main.description1`)}</Description>

          <Description>{translate(`aboutUs.main.description2`)}</Description>

          <Description>{translate(`aboutUs.main.greetings`)}</Description>
        </div>
      </Wrapper>
    </AboutUsTeamStyled>
  );
}

export default AboutUsTeam;

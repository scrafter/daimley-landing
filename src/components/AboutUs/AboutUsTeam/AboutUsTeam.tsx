import React from 'react';
import {
  AboutUsTeamStyled,
  Wrapper,
  Title,
  SubTitle,
  Brief,
  Description,
  DescriptionWrapper,
  ImageWrapper,
} from '@/components/AboutUs/AboutUsTeam/AboutUsTeam.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import { StaticImage } from 'gatsby-plugin-image';

function AboutUsTeam() {
  const { translate } = useTranslation();
  return (
    <AboutUsTeamStyled>
      <Wrapper>
        <StaticImage
          src="../../../assets/aboutUs/aboutUs2.jpg"
          alt="Recruitment photo"
        />

        <DescriptionWrapper>
          <SubTitle>{translate(`aboutUs.main.subTitle`)}</SubTitle>
          <Title>
            <UnderlinedText text={translate(`aboutUs.main.title1`)} />
            {translate(`aboutUs.main.title2`)}
          </Title>

          <Brief>{translate(`aboutUs.main.brief`)}</Brief>

          <Description>{translate(`aboutUs.main.description1`)}</Description>

          <Description>{translate(`aboutUs.main.description2`)}</Description>

          <Description>{translate(`aboutUs.main.greetings`)}</Description>

          <ImageWrapper>
            <StaticImage
              src="../../../assets/aboutUs/aboutUs5.jpg"
              alt="Recruitment photo"
            />
          </ImageWrapper>
        </DescriptionWrapper>
      </Wrapper>
    </AboutUsTeamStyled>
  );
}

export default AboutUsTeam;

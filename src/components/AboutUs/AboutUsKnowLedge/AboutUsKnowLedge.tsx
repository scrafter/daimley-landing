import React from 'react';
import useTranslation from '@/useTranslation';
import {
  AboutUsKnowLedgeStyled,
  PositionWrapper,
  Description,
  DescriptionWrapper,
  Title,
  SubTitle,
  Article,
  ArticlesWrapper,
} from '@/components/AboutUs/AboutUsKnowLedge/AboutUsKnowLedge.styles';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import { StaticImage } from 'gatsby-plugin-image';

function AboutUsKnowLedge() {
  const { translate } = useTranslation();
  return (
    <AboutUsKnowLedgeStyled id="our-team">
      <PositionWrapper>
        <StaticImage
          src="../../../assets/aboutUs/aboutUs4.jpg"
          alt="Recruitment photo"
        />

        <DescriptionWrapper>
          <SubTitle>{translate(`aboutUs.knowledge.subTitle`)}</SubTitle>
          <Title>
            {translate(`aboutUs.knowledge.title1`)}
            <UnderlinedText text={translate(`aboutUs.knowledge.title2`)} />
          </Title>

          <Description>
            {translate(`aboutUs.knowledge.description1`)}
          </Description>
        </DescriptionWrapper>
      </PositionWrapper>

      <ArticlesWrapper>
        <Article>{translate(`aboutUs.knowledge.description2`)}</Article>
        <Article>{translate(`aboutUs.knowledge.description3`)}</Article>
      </ArticlesWrapper>
    </AboutUsKnowLedgeStyled>
  );
}

export default AboutUsKnowLedge;

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
import PhotoMock from '@/components/PhotoMock/PhotoMock';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';

function AboutUsKnowLedge() {
  const { translate } = useTranslation();
  return (
    <AboutUsKnowLedgeStyled>
      <PositionWrapper>
        <PhotoMock width={540} height={630} />
        <DescriptionWrapper>
          <SubTitle>{translate(`aboutUs.knowledge.subTitle`)}</SubTitle>
          <Title>
            {translate(`aboutUs.knowledge.title1`)}
            <UnderlinedText text={translate(`aboutUs.knowledge.subTitle`)} />
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

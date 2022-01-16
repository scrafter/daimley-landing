import React from 'react';
import useTranslation from '@/useTranslation';
import {
  AboutUsDaimleyWorldStyles,
  Header,
  Article,
  ArticleContent,
  ArticleTitle,
  ArticleBullet,
  Title,
  SubTitle,
  ArticlesWrapper,
  ContactTitle,
  ContactSection,
  BottomWrapper,
} from '@/components/AboutUs/AboutUsDaimleyWorld/AboutUsDaimleyWorld.styles';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import Button from '@/components/Shared/Button/Button';

function AboutUsDaimleyWorld() {
  const { translate } = useTranslation();
  return (
    <AboutUsDaimleyWorldStyles>
      <Header>
        <SubTitle>{translate(`aboutUs.daimleyWorld.subTitle`)}</SubTitle>
        <Title>{translate(`aboutUs.daimleyWorld.title`)}</Title>
      </Header>

      <BottomWrapper>
        <ArticlesWrapper>
          <Article>
            <ArticleBullet />
            <ArticleTitle>
              {translate(`aboutUs.daimleyWorld.articleTitle1`)}
            </ArticleTitle>
            <ArticleContent>
              {translate(`aboutUs.daimleyWorld.articleContent1`)}
            </ArticleContent>
          </Article>

          <Article>
            <ArticleBullet />
            <ArticleTitle>
              {translate(`aboutUs.daimleyWorld.articleTitle2`)}
            </ArticleTitle>
            <ArticleContent>
              {translate(`aboutUs.daimleyWorld.articleContent2`)}
            </ArticleContent>
          </Article>

          <Article>
            <ArticleBullet />
            <ArticleTitle>
              {translate(`aboutUs.daimleyWorld.articleTitle3`)}
            </ArticleTitle>
            <ArticleContent>
              {translate(`aboutUs.daimleyWorld.articleContent3`)}
            </ArticleContent>
          </Article>

          <Article>
            <ArticleBullet />
            <ArticleTitle>
              {translate(`aboutUs.daimleyWorld.articleTitle4`)}
            </ArticleTitle>
            <ArticleContent>
              {translate(`aboutUs.daimleyWorld.articleContent4`)}
            </ArticleContent>
          </Article>
        </ArticlesWrapper>

        <ContactSection>
          <ContactTitle>
            <div>{translate(`aboutUs.daimleyWorld.contactTitle1`)}</div>
            <UnderlinedText
              text={translate(`aboutUs.daimleyWorld.contactTitle2`)}
            />
          </ContactTitle>

          <Button label={translate(`aboutUs.daimleyWorld.contactButton`)} />
        </ContactSection>
      </BottomWrapper>
    </AboutUsDaimleyWorldStyles>
  );
}

export default AboutUsDaimleyWorld;

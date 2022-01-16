import React from 'react';
import {
  AboutUsArticlesStyled,
  Article,
  ArticleDescription,
} from '@/components/AboutUs/AboutUsArticles/AboutUsArticles.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';

function AboutUsArticles() {
  const { translate } = useTranslation();
  return (
    <AboutUsArticlesStyled>
      <Article>
        <ArticleDescription>
          {translate(`aboutUs.articles.trainings`)}
        </ArticleDescription>
        <Button label={translate(`aboutUs.articles.trainingsButton`)} />
      </Article>

      <Article>
        <ArticleDescription>
          {translate(`aboutUs.articles.recruitments`)}
        </ArticleDescription>
        <Button label={translate(`aboutUs.articles.recruitmentsButton`)} />
      </Article>
    </AboutUsArticlesStyled>
  );
}

export default AboutUsArticles;

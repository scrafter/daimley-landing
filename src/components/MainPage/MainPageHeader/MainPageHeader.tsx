import React from 'react';
import useTranslation from '@/useTranslation';
import HeaderTile from 'src/components/MainPage/MainPageHeader/HeaderTile/HeaderTile';
import {
  StyledMainPageHeader,
  MainPageTitle,
  MainPageDescription,
  MainPageButton,
  MainPageLeftWrapper,
  MainPageRightWrapper,
} from 'src/components/MainPage/MainPageHeader/MainPageHeader.styles';

const LINKS = [
  [
    { text: `mainPage.header.delegateRecruitment`, url: `#` },
    { text: `mainPage.header.delegateTraining`, url: `#` },
  ],
  [
    { text: `mainPage.header.jobOffers`, url: `#` },
    { text: `mainPage.header.buyTraining`, url: `#` },
  ],
];

function MainPageHeader() {
  const { translate } = useTranslation();

  return (
    <StyledMainPageHeader>
      <MainPageLeftWrapper>
        <MainPageTitle>
          {translate(`mainPage.header.recruitment`)}
        </MainPageTitle>

        <MainPageDescription>
          {translate(`mainPage.header.weSupport`)}
        </MainPageDescription>

        <MainPageButton>{translate(`mainPage.header.checkOut`)}</MainPageButton>
      </MainPageLeftWrapper>

      <MainPageRightWrapper>
        <HeaderTile title="mainPage.header.bossSpace" links={LINKS[0]} />
        <HeaderTile title="mainPage.header.employeeSpace" links={LINKS[1]} />
      </MainPageRightWrapper>
    </StyledMainPageHeader>
  );
}

export default MainPageHeader;
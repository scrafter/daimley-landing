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
import BossIcon from '@/assets/icons/BossIcon';
import EmployeeIcon from '@/assets/icons/EmployeeIcon';
import { EMAIL_ADDRESS } from '@/constants';

const EMAIL_BODY = `Szanowni Państwo,
  W załączniku przesyłam swoje CV.
  Proszę o umieszczenie go w bazie danych firmy Daimley i informowanie mnie o ofertach pracy zgodnych z moim doświadczeniem.
`;

const EMAIL_BODY2 = `Szanowni Państwo,
  Chciałbym/am skorzystać z Państwa darmowej usługi weryfikacji mojego CV.
  Przesyłam je w załączniku.
  Jednocześnie proszę o dołączenie mojego CV do bazy danych firmy Daimley.
`;

export const CV_EMAIL = `mailto:${EMAIL_ADDRESS}?Subject=Rejestracja CV w bazie Daimley&body=${EMAIL_BODY}`;
export const CV_VERIFY_EMAIL = `mailto:${EMAIL_ADDRESS}?Subject=Darmowa usługa weryfikacji CV&body=${EMAIL_BODY2}`;

const LINKS = [
  [
    { text: `mainPage.header.delegateRecruitment`, url: `/form` },
    { text: `mainPage.header.delegateTraining`, url: `/form` },
    { text: `mainPage.header.delegateConsulting`, url: `/form` },
  ],
  [
    { text: `mainPage.header.jobOffers`, url: `/job-offers#list` },
    { text: `mainPage.header.buyTraining`, url: `/trainings` },
    {
      text: `mainPage.header.registerCV`,
      url: CV_EMAIL,
    },
    {
      text: `mainPage.header.registerCVToCheck`,
      url: CV_VERIFY_EMAIL,
    },
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

        <MainPageButton
          onClick={() => window.location.replace(`/#we-are-daimley`)}
        >
          {translate(`mainPage.header.checkOut`)}
        </MainPageButton>
      </MainPageLeftWrapper>

      <MainPageRightWrapper>
        <HeaderTile
          icon={<BossIcon />}
          title="mainPage.header.bossSpace"
          links={LINKS[0]}
        />
        <HeaderTile
          icon={<EmployeeIcon />}
          title="mainPage.header.employeeSpace"
          links={LINKS[1]}
        />
      </MainPageRightWrapper>
    </StyledMainPageHeader>
  );
}

export default MainPageHeader;

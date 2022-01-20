import React from 'react';
import useTranslation from '@/useTranslation';
import {
  StyledFooter,
  FooterColumn,
  FooterColumnTitle,
  FooterColumnItem,
  ColumnsWrapper,
  Copyright,
} from './Footer.styles';

function Footer() {
  const { translate } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <ColumnsWrapper>
        <FooterColumn>
          <FooterColumnTitle>{translate(`footer.mainSite`)}</FooterColumnTitle>

          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnTitle>{translate(`footer.ourOffer`)}</FooterColumnTitle>

          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnTitle>{translate(`footer.trainings`)}</FooterColumnTitle>

          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
          <FooterColumnItem>{translate(`footer.mainSite`)}</FooterColumnItem>
        </FooterColumn>

        <FooterColumn>
          <FooterColumnTitle>
            {translate(`footer.recruitment`)}
          </FooterColumnTitle>

          <FooterColumnItem>
            {translate(`footer.specialities`)}
          </FooterColumnItem>
          <FooterColumnItem>{translate(`footer.industry`)}</FooterColumnItem>
          <FooterColumnItem>
            {translate(`footer.recruitmentProcess`)}
          </FooterColumnItem>
        </FooterColumn>
      </ColumnsWrapper>

      <Copyright>
        {translate(`general.copyright`, { year: currentYear })}
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;

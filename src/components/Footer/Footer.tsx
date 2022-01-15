import React from 'react';
import useTranslation from '@/intl/useTranslation';
import {
  StyledFooter,
  FooterColumn,
  FooterColumnTitle,
  FooterColumnItem,
} from './Footer.styles';

function Footer() {
  const { translate } = useTranslation();

  return (
    <StyledFooter>
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
        <FooterColumnTitle>{translate(`footer.recruitment`)}</FooterColumnTitle>

        <FooterColumnItem>{translate(`footer.specialities`)}</FooterColumnItem>
        <FooterColumnItem>{translate(`footer.industry`)}</FooterColumnItem>
        <FooterColumnItem>
          {translate(`footer.recruitmentProcess`)}
        </FooterColumnItem>
      </FooterColumn>
    </StyledFooter>
  );
}

export default Footer;

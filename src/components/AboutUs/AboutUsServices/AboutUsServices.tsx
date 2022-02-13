import React from 'react';
import useTranslation from '@/useTranslation';
import {
  Contact,
  SectionsWrapper,
  AboutUsServicesStyled,
  Header,
  Section,
  SectionContent,
  SectionTitle,
  SubTitle,
  Title,
  Brief,
} from '@/components/AboutUs/AboutUsServices/AboutUsServices.styles';
import Button from '@/components/Shared/Button/Button';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import TrainingsIcon from '@/assets/icons/TrainingsIcon';
import FindIcon from '@/assets/icons/FindIcon';
import SupportIcon from '@/assets/icons/SupportIcon';

function AboutUsServices() {
  const { translate } = useTranslation();
  return (
    <AboutUsServicesStyled id="our-services">
      <Header>
        <SubTitle>{translate(`aboutUs.services.subTitle`)}</SubTitle>
        <Title>{translate(`aboutUs.services.title`)}</Title>
        <Brief>{translate(`aboutUs.services.brief`)}</Brief>
      </Header>

      <SectionsWrapper>
        <Section>
          <TrainingsIcon width={62} height={62} />
          <SectionTitle>
            {translate(`aboutUs.services.trainingsTitle`)}
          </SectionTitle>
          <SectionContent>
            {translate(`aboutUs.services.trainingsContent`)}
          </SectionContent>
          <Button
            link="/trainings"
            label={translate(`aboutUs.services.trainingsButton`)}
          />
        </Section>

        <Section>
          <FindIcon width={62} height={62} />
          <SectionTitle>
            {translate(`aboutUs.services.recruitmentTitle`)}
          </SectionTitle>
          <SectionContent>
            {translate(`aboutUs.services.recruitmentContent`)}
          </SectionContent>
          <Button
            link="/recruitment"
            label={translate(`aboutUs.services.recruitmentButton`)}
          />
        </Section>

        <Section>
          <SupportIcon width={62} height={62} />
          <SectionTitle>
            {translate(`aboutUs.services.supportTitle`)}
          </SectionTitle>
          <SectionContent>
            {translate(`aboutUs.services.supportContent`)}
          </SectionContent>
          <Button
            link="/form"
            label={translate(`aboutUs.services.supportButton`)}
          />
        </Section>
      </SectionsWrapper>

      <Contact>
        {translate(`aboutUs.services.contact1`)}
        <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_TO_READ}</a>
        {translate(`aboutUs.services.contact2`)}
        <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        {translate(`aboutUs.services.contact3`)}
      </Contact>
    </AboutUsServicesStyled>
  );
}

export default AboutUsServices;

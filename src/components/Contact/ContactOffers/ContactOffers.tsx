import React from 'react';
import {
  ContactOffersStyled,
  Contact,
  Wrapper,
  TitleWrapper,
  Title,
  Section,
  SectionDescription,
  PostScript,
} from '@/components/Contact/ContactOffers/ContactOffers.styles';
import useTranslation from '@/useTranslation';
import PhotoMock from '@/components/PhotoMock/PhotoMock';
import Button from '@/components/Shared/Button/Button';
import { EMAIL_ADDRESS, PHONE_NUMBER_TO_READ } from '@/constants';

function ContactOffers() {
  const { translate } = useTranslation();

  return (
    <ContactOffersStyled>
      <Wrapper>
        <Section>
          <TitleWrapper>
            <PhotoMock width={68} height={60} />
            <Title>{translate(`contact.offers.sectionTitle1`)}</Title>
          </TitleWrapper>

          <SectionDescription>
            {translate(`contact.offers.sectionContent1`)}
          </SectionDescription>

          <Button label={translate(`contact.offers.sectionButton1`)} />

          <PostScript>
            {translate(`contact.offers.sectionPostScript1`)}
          </PostScript>
          <Contact>{PHONE_NUMBER_TO_READ}</Contact>
        </Section>

        <Section>
          <TitleWrapper>
            <PhotoMock width={68} height={60} />
            <Title>{translate(`contact.offers.sectionTitle2`)}</Title>
          </TitleWrapper>

          <SectionDescription>
            {translate(`contact.offers.sectionContent2`)}
          </SectionDescription>

          <Button label={translate(`contact.offers.sectionButton2`)} />

          <PostScript>
            {translate(`contact.offers.sectionPostScript2`)}
          </PostScript>
          <Contact>{PHONE_NUMBER_TO_READ}</Contact>
        </Section>

        <Section>
          <TitleWrapper>
            <PhotoMock width={68} height={60} />
            <Title>{translate(`contact.offers.sectionTitle3`)}</Title>
          </TitleWrapper>

          <SectionDescription>
            {translate(`contact.offers.sectionContent3`)}
          </SectionDescription>

          <Button label={translate(`contact.offers.sectionButton3`)} />

          <PostScript>
            {translate(`contact.offers.sectionPostScript3`)}
          </PostScript>
          <Contact>
            <a href={`mailto${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </Contact>
        </Section>
      </Wrapper>
    </ContactOffersStyled>
  );
}

export default ContactOffers;

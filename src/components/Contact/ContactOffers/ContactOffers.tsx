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
import Button from '@/components/Shared/Button/Button';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import BossIcon from '@/assets/icons/BossIcon';
import WorkIcon from '@/assets/icons/WorkIcon';
import { CV_EMAIL } from '@/components/MainPage/MainPageHeader/MainPageHeader';

function ContactOffers() {
  const { translate } = useTranslation();

  return (
    <ContactOffersStyled>
      <Wrapper>
        <Section>
          <TitleWrapper>
            <WorkIcon />
            <Title>{translate(`contact.offers.sectionTitle1`)}</Title>
          </TitleWrapper>
          <SectionDescription>
            {translate(`contact.offers.sectionContent11`)}
            <a href="/rodo">{translate(`contact.offers.sectionContent12`)}</a>
            {translate(`contact.offers.sectionContent13`)}
          </SectionDescription>
          <Button
            link={CV_EMAIL}
            label={translate(`contact.offers.sectionButton1`)}
          />
          <PostScript>
            {translate(`contact.offers.sectionPostScript1`)}
          </PostScript>
          <Contact>
            <PhoneIcon width={20} height={20} />
            <a className="phone" href={`tel:${PHONE_NUMBER}`}>
              {PHONE_NUMBER_TO_READ}
            </a>
          </Contact>
        </Section>

        <Section>
          <TitleWrapper>
            <BossIcon width={54} height={60} />
            <Title>{translate(`contact.offers.sectionTitle2`)}</Title>
          </TitleWrapper>

          <SectionDescription>
            {translate(`contact.offers.sectionContent2`)}
          </SectionDescription>

          <Button
            link="/form"
            label={translate(`contact.offers.sectionButton2`)}
          />

          <PostScript>
            {translate(`contact.offers.sectionPostScript2`)}
          </PostScript>
          <Contact>
            <PhoneIcon width={20} height={20} />
            <a className="phone" href={`tel:${PHONE_NUMBER}`}>
              {PHONE_NUMBER_TO_READ}
            </a>
          </Contact>
        </Section>

        <Section>
          <TitleWrapper>
            <BossIcon width={54} height={60} />
            <Title>{translate(`contact.offers.sectionTitle3`)}</Title>
          </TitleWrapper>

          <SectionDescription>
            {translate(`contact.offers.sectionContent3`)}
          </SectionDescription>

          <Button
            link="/form"
            label={translate(`contact.offers.sectionButton3`)}
          />

          <PostScript>
            {translate(`contact.offers.sectionPostScript3`)}
          </PostScript>
          <Contact>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </Contact>
        </Section>
      </Wrapper>
    </ContactOffersStyled>
  );
}

export default ContactOffers;

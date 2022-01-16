import React from 'react';
import {
  ContactYourOpinionStyled,
  Section,
} from '@/components/Contact/ContactYourOpinion/ContactYourOpinion.styles';
import useTranslation from '@/useTranslation';
import { OPINION_EMAIL_ADDRESS } from '@/constants';

function ContactYourOpinion() {
  const { translate } = useTranslation();
  return (
    <ContactYourOpinionStyled>
      <Section>{translate(`contact.yourOpinion.section1`)}</Section>
      <Section>
        {translate(`contact.yourOpinion.section2`)}
        <a href={`mailto:${OPINION_EMAIL_ADDRESS}`}>{OPINION_EMAIL_ADDRESS}</a>
      </Section>
    </ContactYourOpinionStyled>
  );
}

export default ContactYourOpinion;

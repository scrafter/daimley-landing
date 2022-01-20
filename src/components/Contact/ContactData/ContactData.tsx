import React from 'react';
import {
  ContactDataStyled,
  DataSection,
  Phone,
  Title,
  Email,
  Wrapper,
} from '@/components/Contact/ContactData/ContactData.styles';
import useTranslation from '@/useTranslation';
import {
  OPINION_EMAIL_ADDRESS,
  PHONE_NUMBER,
  PHONE_NUMBER_TO_READ,
} from '@/constants';
import ContactDataForm from '@/components/Contact/ContactData/ContactDataForm/ContactDataForm';
import { StaticImage } from 'gatsby-plugin-image';

function ContactData() {
  const { translate } = useTranslation();
  return (
    <ContactDataStyled>
      <Wrapper>
        <StaticImage
          src="../../../assets/contact/contact2.jpg"
          alt="Recruitment photo"
        />

        <DataSection>
          <Title>{translate(`contact.data.title`)}</Title>
          <Phone href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_TO_READ}</Phone>
          <Email href={`mailto:${OPINION_EMAIL_ADDRESS}`}>
            {OPINION_EMAIL_ADDRESS}
          </Email>
        </DataSection>
      </Wrapper>

      <ContactDataForm />
    </ContactDataStyled>
  );
}

export default ContactData;

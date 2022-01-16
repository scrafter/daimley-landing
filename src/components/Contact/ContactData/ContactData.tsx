import React from 'react';
import {
  ContactDataStyled,
  DataSection,
  Phone,
  Title,
  Email,
  Wrapper,
} from '@/components/Contact/ContactData/ContactData.styles';
import PhotoMock from '@/components/PhotoMock/PhotoMock';
import useTranslation from '@/useTranslation';
import { OPINION_EMAIL_ADDRESS, PHONE_NUMBER } from '@/constants';
import ContactDataForm from '@/components/Contact/ContactData/ContactDataForm/ContactDataForm';

function ContactData() {
  const { translate } = useTranslation();
  return (
    <ContactDataStyled>
      <Wrapper>
        <PhotoMock width={350} height={500} />

        <DataSection>
          <Title>{translate(`contact.data.title`)}</Title>
          <Phone href={`tel:${PHONE_NUMBER}`}>726 280 872</Phone>
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

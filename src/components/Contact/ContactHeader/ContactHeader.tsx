import React from 'react';
import {
  ContactHeaderStyled,
  Title,
  SubTitle,
} from '@/components/Contact/ContactHeader/ContactHeader.styles';
import useTranslation from '@/useTranslation';

function ContactHeader() {
  const { translate } = useTranslation();
  return (
    <ContactHeaderStyled>
      <SubTitle>{translate(`contact.header.subTitle`)}</SubTitle>
      <Title>{translate(`contact.header.title`)}</Title>
    </ContactHeaderStyled>
  );
}

export default ContactHeader;

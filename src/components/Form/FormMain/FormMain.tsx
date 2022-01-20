import React from 'react';
import {
  DescriptionWrapper,
  FormMainStyles,
  Description,
  Title,
  SubTitle,
  Brief,
  ContactItem,
  Contact,
} from '@/components/Form/FormMain/FormMain.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import MailIcon from '@/assets/icons/MailIcon';
import FormMainForm from '@/components/Form/FormMain/FormMainForm/FormMainForm';

function FormMain() {
  const { translate } = useTranslation();

  return (
    <FormMainStyles>
      <DescriptionWrapper>
        <SubTitle>{translate(`form.main.subTitle`)}</SubTitle>
        <Title>
          {translate(`form.main.title1`)}
          <UnderlinedText text={translate(`form.main.title2`)} />
        </Title>

        <Brief>{translate(`form.main.brief`)}</Brief>

        <Description>{translate(`form.main.paragraph`)}</Description>

        <Contact>{translate(`form.main.paragraph`)}</Contact>

        <ContactItem>
          <PhoneIcon height={30} width={30} fill="#419d3e" />
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_TO_READ}</a>
        </ContactItem>

        <ContactItem>
          <MailIcon height={30} width={30} fill="#419d3e" />
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </ContactItem>
      </DescriptionWrapper>

      <FormMainForm />
    </FormMainStyles>
  );
}

export default FormMain;

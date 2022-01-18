import React from 'react';
import {
  TrainingsContactStyled,
  ContactDataWrapper,
  Phone,
  Title,
  Email,
} from '@/components/Trainings/TrainingsContact/TrainingsContact.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import Button from '@/components/Shared/Button/Button';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHONE_NUMBER_TO_READ } from '@/constants';
import MailIcon from '@/assets/icons/MailIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';

function TrainingsContact() {
  const { translate } = useTranslation();
  return (
    <TrainingsContactStyled>
      <Title>
        <div>{translate(`trainings.contact.title1`)}</div>
        <UnderlinedText text={translate(`trainings.contact.title2`)} />
      </Title>

      <Button label={translate(`trainings.contact.button`)} />

      <ContactDataWrapper>
        <Phone>
          <PhoneIcon />
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_TO_READ}</a>
        </Phone>
        <Email>
          <MailIcon />
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </Email>
      </ContactDataWrapper>
    </TrainingsContactStyled>
  );
}

export default TrainingsContact;

import React, { useCallback } from 'react';
import {
  ContactDataFormStyled,
  Field,
  FieldWrapper,
  FieldGroup,
  Label,
  Title,
  Textarea,
} from '@/components/Contact/ContactData/ContactDataForm/ContactDataForm.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';
import { useForm } from 'react-hook-form';
import useContactForm from '@/components/Contact/ContactData/ContactDataForm/useContactForm';

function ContactDataForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm();
  const { translate } = useTranslation();
  const { onSubmit } = useContactForm();

  const isInvalid = useCallback(
    (fieldName: string) => isSubmitted && errors[fieldName],
    [errors, isSubmitted],
  );

  return (
    <ContactDataFormStyled
      id="form"
      onSubmit={handleSubmit((data) => onSubmit(data as any, reset))}
    >
      <Title>{translate(`contact.form.title`)}</Title>

      <FieldWrapper>
        <FieldGroup isInvalid={isInvalid(`firstName`)}>
          <Label>{translate(`contact.form.firstName`)}</Label>
          <Field {...register(`firstName`, { required: true })} />
        </FieldGroup>

        <FieldGroup isInvalid={isInvalid(`lastName`)}>
          <Label>{translate(`contact.form.lastName`)}</Label>
          <Field {...register(`lastName`, { required: true })} />
        </FieldGroup>
      </FieldWrapper>

      <FieldGroup>
        <Label>{translate(`contact.form.companyName`)}</Label>
        <Field {...register(`companyName`)} />
      </FieldGroup>

      <FieldWrapper>
        <FieldGroup isInvalid={isInvalid(`email`)}>
          <Label>{translate(`contact.form.email`)}</Label>
          <Field {...register(`email`, { required: true })} type="email" />
        </FieldGroup>

        <FieldGroup>
          <Label>{translate(`contact.form.phone`)}</Label>
          <Field {...register(`phone`)} />
        </FieldGroup>
      </FieldWrapper>

      <FieldGroup isInvalid={isInvalid(`message`)}>
        <Label>{translate(`contact.form.text`)}</Label>
        <Textarea {...register(`message`, { required: true })} />
      </FieldGroup>

      <Button type="submit" label={translate(`contact.form.button`)} />
    </ContactDataFormStyled>
  );
}

export default ContactDataForm;

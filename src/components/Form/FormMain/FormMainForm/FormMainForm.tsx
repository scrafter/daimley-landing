import React, { useCallback, useMemo } from 'react';
import {
  FormMainFormStyled,
  Title,
  Field,
  FieldWrapper,
  FieldGroup,
  Select,
  Label,
  Textarea,
} from '@/components/Form/FormMain/FormMainForm/FormMainForm.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';
import { useForm } from 'react-hook-form';
import useContactForm, {
  FormData,
} from '@/components/Contact/ContactData/ContactDataForm/useContactForm';

function FormMainForm() {
  const { translate } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm();
  const { onSubmit } = useContactForm();

  const isInvalid = useCallback(
    (fieldName: string) => isSubmitted && errors[fieldName],
    [errors, isSubmitted],
  );

  const selectOptions = useMemo(
    () => [
      translate(`form.main.topic1`),
      translate(`form.main.topic2`),
      translate(`form.main.topic3`),
    ],
    [translate],
  );

  return (
    <FormMainFormStyled
      onSubmit={handleSubmit((data) => onSubmit(data as FormData, reset))}
    >
      <Title>{translate(`form.main.formTitle`)}</Title>

      <FieldGroup isInvalid={isInvalid(`topic`)}>
        <Label>{translate(`contact.form.topic`)}</Label>
        <Select {...register(`topic`, { required: true })}>
          <option selected value={undefined} label=" " />
          {selectOptions.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Select>
      </FieldGroup>

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
    </FormMainFormStyled>
  );
}

export default FormMainForm;

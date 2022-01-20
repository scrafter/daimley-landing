import React from 'react';
import {
  FormDescriptionStyled,
  DescriptionWrapper,
  Title,
  SubTitle,
  Paragraph,
} from '@/components/Form/FormDescription/FormDescription.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import { StaticImage } from 'gatsby-plugin-image';

function FormDescription() {
  const { translate } = useTranslation();

  return (
    <FormDescriptionStyled>
      <StaticImage
        src="../../../assets/form/form1.jpg"
        alt="Recruitment photo"
      />

      <DescriptionWrapper>
        <SubTitle>{translate(`form.description.subTitle`)}</SubTitle>
        <Title>
          <UnderlinedText text={translate(`form.description.title1`)} />
          {translate(`form.description.title2`)}
        </Title>

        <Paragraph>{translate(`form.description.paragraph1`)}</Paragraph>
        <Paragraph>{translate(`form.description.paragraph2`)}</Paragraph>
        <Paragraph>{translate(`form.description.paragraph3`)}</Paragraph>
      </DescriptionWrapper>
    </FormDescriptionStyled>
  );
}

export default FormDescription;

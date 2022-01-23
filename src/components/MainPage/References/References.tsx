import React, { useState } from 'react';
import {
  ReferencesStyled,
  Wrapper,
  Title,
  SubTitle,
  BackgroundImage,
} from '@/components/MainPage/References/References.styles';
import { testimonialsList } from './testimonials';
import Testimonial from '@/components/MainPage/References/Testimonial/Testimonial';
import useTranslation from '@/useTranslation';

function References() {
  const [testimonial] = useState(testimonialsList[0]);
  const { translate } = useTranslation();

  return (
    <ReferencesStyled>
      <Wrapper>
        <div>
          <SubTitle>{translate(`references.subTitle`)}</SubTitle>
          <Title>{translate(`references.title`)}</Title>
        </div>

        <Testimonial
          author={testimonial.author}
          company={testimonial.company}
          text={testimonial.description}
        />
      </Wrapper>

      <BackgroundImage />
    </ReferencesStyled>
  );
}

export default References;

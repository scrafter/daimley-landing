import React, { useState } from 'react';
import {
  ReferencesStyled,
  Wrapper,
  Title,
  SubTitle,
  BackgroundImage,
  DescriptionWrapper,
  TestimonialWrapper,
  Arrows,
} from '@/components/MainPage/References/References.styles';
import { testimonialsList } from './testimonials';
import Testimonial from '@/components/MainPage/References/Testimonial/Testimonial';
import useTranslation from '@/useTranslation';
import IconRight from '@/assets/icons/IconRight';

function References() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { translate } = useTranslation();

  const isFirstTestimonial = testimonialIndex === 0;
  const isLastTestimonial = testimonialIndex === testimonialsList.length - 1;
  const onNext = () => {
    if (!isLastTestimonial) {
      setTestimonialIndex(testimonialIndex + 1);
    }
  };
  const onPrevious = () => {
    if (!isFirstTestimonial) {
      setTestimonialIndex(testimonialIndex - 1);
    }
  };

  return (
    <ReferencesStyled>
      <Wrapper>
        <DescriptionWrapper>
          <SubTitle>{translate(`references.subTitle`)}</SubTitle>
          <Title>{translate(`references.title`)}</Title>
        </DescriptionWrapper>

        <TestimonialWrapper>
          <Testimonial
            author={testimonialsList[testimonialIndex].author}
            company={testimonialsList[testimonialIndex].company}
            text={testimonialsList[testimonialIndex].description}
          />

          <Arrows>
            <IconRight active={!isFirstTestimonial} onClick={onPrevious} />
            <IconRight active={!isLastTestimonial} onClick={onNext} />
          </Arrows>
        </TestimonialWrapper>
      </Wrapper>

      <BackgroundImage />
    </ReferencesStyled>
  );
}

export default References;

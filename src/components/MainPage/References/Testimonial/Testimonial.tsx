import React from 'react';
import {
  Author,
  TestimonialStyled,
  CompanyName,
  Content,
} from '@/components/MainPage/References/Testimonial/Testimonial.styles';

interface Props {
  author: string;
  company: string;
  text: string;
}

function Testimonial({ author, text, company }: Props) {
  return (
    <TestimonialStyled>
      <Author>{author}</Author>
      <CompanyName>{company}</CompanyName>
      <Content>{text}</Content>
    </TestimonialStyled>
  );
}

export default Testimonial;

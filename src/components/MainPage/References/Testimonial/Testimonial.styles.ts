import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const TestimonialStyled = styled.article`
  padding: 80px 75px;
  background-color: white;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: column;
  width: 700px;
`;

export const Author = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props: DaimleyTheme) => props.theme.gray};
`;

export const CompanyName = styled.h6`
  font-size: 1.125rem;
  color: #afb6b2;
  margin-bottom: 40px;
`;

export const Content = styled.p`
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 2;
  font-size: 1.125rem;
`;

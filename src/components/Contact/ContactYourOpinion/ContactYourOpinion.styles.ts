import styled from '@emotion/styled';
import { DaimleyTheme } from '@/theme';

export const ContactYourOpinionStyled = styled.section`
  padding: 120px 0;
  width: 80vw;
  margin: 0 auto;
`;

export const Section = styled.p`
  font-size: 1.125rem;
  color: ${(props: DaimleyTheme) => props.theme.gray};
  line-height: 2;

  &:first-of-type {
    margin-bottom: 35px;
  }

  & > a {
    color: ${(props: DaimleyTheme) => props.theme.orange};
  }
`;
